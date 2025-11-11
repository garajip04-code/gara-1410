
import React from 'react';
import type { Itinerary, ItineraryDay, Activity } from '../types';
import { CalendarIcon, PinIcon } from './IconComponents';

const ActivityCard: React.FC<{ activity: Activity }> = ({ activity }) => (
  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
    <div className="flex-shrink-0">
      <PinIcon className="w-6 h-6 text-blue-500 mt-1" />
    </div>
    <div>
      <h4 className="font-bold text-gray-800">{activity.name}</h4>
      <p className="text-gray-600 text-sm mt-1">{activity.description}</p>
    </div>
  </div>
);

const DayCard: React.FC<{ dayData: ItineraryDay }> = ({ dayData }) => (
  <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-100">
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
        {dayData.day}
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900">Hari ke-{dayData.day}</h3>
        <p className="text-md text-blue-700 font-semibold">{dayData.title}</p>
      </div>
    </div>
    <div className="space-y-4">
      {dayData.activities.map((activity, index) => (
        <ActivityCard key={index} activity={activity} />
      ))}
    </div>
  </div>
);

export const ItineraryDisplay: React.FC<{ itinerary: Itinerary }> = ({ itinerary }) => {
  return (
    <div className="mt-12 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">{itinerary.title}</h2>
        <p className="mt-2 text-lg text-gray-600">Rencana perjalanan spesial untuk Anda!</p>
      </div>
      <div className="space-y-8 max-w-4xl mx-auto">
        {itinerary.days.sort((a, b) => a.day - b.day).map(day => (
          <DayCard key={day.day} dayData={day} />
        ))}
      </div>
    </div>
  );
};
