
import { BeachIcon, MountainIcon, FoodIcon, CultureIcon, RelaxIcon } from './components/IconComponents';
import type { TravelInterest } from './types';

export const TRAVEL_INTERESTS: TravelInterest[] = [
  { key: 'alam', label: 'Alam & Pantai', icon: BeachIcon, color: 'blue' },
  { key: 'petualangan', label: 'Petualangan', icon: MountainIcon, color: 'green' },
  { key: 'kuliner', label: 'Kuliner', icon: FoodIcon, color: 'red' },
  { key: 'budaya', label: 'Budaya', icon: CultureIcon, color: 'purple' },
  { key: 'relaksasi', label: 'Relaksasi', icon: RelaxIcon, color: 'teal' },
];
