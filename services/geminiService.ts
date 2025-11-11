
import { GoogleGenAI, Type } from "@google/genai";
import type { Itinerary } from '../types';

// FIX: Initialize GoogleGenAI directly with process.env.API_KEY as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const itinerarySchema = {
  type: Type.OBJECT,
  properties: {
    title: {
      type: Type.STRING,
      description: "Judul yang menarik untuk rencana perjalanan ini, contoh: 'Petualangan 3 Hari di Surga Tersembunyi Pacitan'."
    },
    days: {
      type: Type.ARRAY,
      description: "Array yang berisi detail rencana perjalanan untuk setiap hari.",
      items: {
        type: Type.OBJECT,
        properties: {
          day: {
            type: Type.INTEGER,
            description: "Nomor hari, dimulai dari 1."
          },
          title: {
            type: Type.STRING,
            description: "Tema atau judul untuk hari ini, contoh: 'Eksplorasi Pantai & Gua'."
          },
          activities: {
            type: Type.ARRAY,
            description: "Array yang berisi aktivitas untuk hari ini.",
            items: {
              type: Type.OBJECT,
              properties: {
                name: {
                  type: Type.STRING,
                  description: "Nama tempat wisata atau aktivitas, contoh: 'Pantai Klayar'."
                },
                description: {
                  type: Type.STRING,
                  description: "Deskripsi singkat dan menarik tentang aktivitas atau tempat tersebut, termasuk apa yang bisa dilakukan di sana."
                }
              },
              required: ["name", "description"]
            }
          }
        },
        required: ["day", "title", "activities"]
      }
    }
  },
  required: ["title", "days"]
};

export const generatePacitanItinerary = async (interests: string[]): Promise<Itinerary> => {
  const prompt = `Buatkan rencana perjalanan (itinerary) wisata selama 3 hari di Pacitan, Jawa Timur. Rencana ini harus disesuaikan dengan minat pengguna: ${interests.join(', ')}. 
  
  Setiap hari harus memiliki tema dan beberapa rekomendasi tempat wisata atau aktivitas yang relevan. Berikan deskripsi singkat untuk setiap aktivitas. Pastikan outputnya dalam format JSON yang sesuai dengan skema yang diberikan.
  
  Gunakan bahasa Indonesia yang menarik dan informatif.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: itinerarySchema,
        temperature: 0.8,
        topP: 0.9,
      },
    });

    const jsonText = response.text.trim();
    const parsedItinerary: Itinerary = JSON.parse(jsonText);
    
    // Basic validation
    if (!parsedItinerary.title || !Array.isArray(parsedItinerary.days) || parsedItinerary.days.length === 0) {
      throw new Error("Invalid itinerary structure received from API.");
    }
    
    return parsedItinerary;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate itinerary. Please try again.");
  }
};
