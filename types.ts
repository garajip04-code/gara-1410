
import type { ElementType } from 'react';

export interface Activity {
  name: string;
  description: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: Activity[];
}

export interface Itinerary {
  title: string;
  days: ItineraryDay[];
}

export interface TravelInterest {
  key: string;
  label: string;
  icon: ElementType;
  color: string;
}
