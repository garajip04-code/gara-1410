
import React from 'react';
import type { TravelInterest } from '../types';

interface InterestSelectorProps {
  interests: TravelInterest[];
  selectedInterests: Set<string>;
  onInterestToggle: (interestKey: string) => void;
}

const colorClasses = {
  blue: {
    bg: 'bg-blue-100',
    border: 'border-blue-500',
    text: 'text-blue-800',
    ring: 'ring-blue-500'
  },
  green: {
    bg: 'bg-green-100',
    border: 'border-green-500',
    text: 'text-green-800',
    ring: 'ring-green-500'
  },
  red: {
    bg: 'bg-red-100',
    border: 'border-red-500',
    text: 'text-red-800',
    ring: 'ring-red-500'
  },
  purple: {
    bg: 'bg-purple-100',
    border: 'border-purple-500',
    text: 'text-purple-800',
    ring: 'ring-purple-500'
  },
  teal: {
    bg: 'bg-teal-100',
    border: 'border-teal-500',
    text: 'text-teal-800',
    ring: 'ring-teal-500'
  }
};


export const InterestSelector: React.FC<InterestSelectorProps> = ({ interests, selectedInterests, onInterestToggle }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
      {interests.map((interest) => {
        const isSelected = selectedInterests.has(interest.key);
        const colors = colorClasses[interest.color as keyof typeof colorClasses] || colorClasses.blue;
        
        return (
          <button
            key={interest.key}
            onClick={() => onInterestToggle(interest.key)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full border-2 
              transition-all duration-200 transform focus:outline-none
              ${
                isSelected
                  ? `${colors.bg} ${colors.border} ${colors.text} ring-2 ${colors.ring} ring-offset-2 scale-105 shadow-md`
                  : 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200 hover:border-gray-300'
              }
            `}
          >
            <interest.icon className={`w-5 h-5 ${isSelected ? colors.text : 'text-gray-500'}`} />
            <span className="font-semibold text-sm">{interest.label}</span>
          </button>
        );
      })}
    </div>
  );
};
