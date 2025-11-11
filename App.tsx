
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { InterestSelector } from './components/InterestSelector';
import { ItineraryDisplay } from './components/ItineraryDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorDisplay } from './components/ErrorDisplay';
import { generatePacitanItinerary } from './services/geminiService';
import type { Itinerary, TravelInterest } from './types';
import { TRAVEL_INTERESTS } from './constants';

const App: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<Set<string>>(new Set());
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInterestToggle = useCallback((interestKey: string) => {
    setSelectedInterests(prev => {
      const newSet = new Set(prev);
      if (newSet.has(interestKey)) {
        newSet.delete(interestKey);
      } else {
        newSet.add(interestKey);
      }
      return newSet;
    });
  }, []);

  const handleGenerateItinerary = useCallback(async () => {
    if (selectedInterests.size === 0) {
      setError('Silakan pilih minimal satu minat untuk membuat rencana perjalanan.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setItinerary(null);

    try {
      // FIX: Explicitly type `interestsArray` as `string[]` to resolve a TypeScript inference issue.
      const interestsArray: string[] = Array.from(selectedInterests);
      const result = await generatePacitanItinerary(interestsArray);
      setItinerary(result);
    } catch (e) {
      console.error(e);
      setError('Maaf, terjadi kesalahan saat membuat rencana perjalanan. Coba lagi nanti.');
    } finally {
      setIsLoading(false);
    }
  }, [selectedInterests]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-800">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 py-8 md:py-12 -mt-24 md:-mt-32 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">Rencanakan Petualangan Anda di Pacitan</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Pilih minat Anda, dan biarkan AI kami menyusun rencana perjalanan yang tak terlupakan untuk Anda.</p>
            
            <InterestSelector 
              interests={TRAVEL_INTERESTS}
              selectedInterests={selectedInterests}
              onInterestToggle={handleInterestToggle}
            />

            <div className="text-center mt-8">
              <button
                onClick={handleGenerateItinerary}
                disabled={isLoading || selectedInterests.size === 0}
                className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100 shadow-lg"
              >
                {isLoading ? 'Membuat Rencana...' : 'Buat Rencana Perjalanan'}
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12">
          {isLoading && <LoadingSpinner />}
          {error && <ErrorDisplay message={error} />}
          {itinerary && <ItineraryDisplay itinerary={itinerary} />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
