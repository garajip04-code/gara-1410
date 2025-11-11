
import React from 'react';

// Props for all icons
type IconProps = React.SVGProps<SVGSVGElement>;

export const BeachIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"/><path d="M15.55 11a4 4 0 0 0-7.1 0"/><path d="M16 20a4 4 0 0 0-8 0"/>
  </svg>
);

export const MountainIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
  </svg>
);

export const FoodIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
  </svg>
);

export const CultureIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 15s1-1 3-1 3 2 5 2 4-2 6-2 3 1 3 1v5H2v-5Z"/><path d="M2 15v-3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3"/><path d="m12 10-4 4h8l-4-4Z"/>
  </svg>
);

export const RelaxIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 13.38a10 10 0 1 0 5.5-5.5"/><path d="M2 13.38a10 10 0 0 1 4.5 4.5"/><path d="M17 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M17 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
  </svg>
);

export const LogoIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12a10 10 0 1 1 14.54 9.22L20 22l-1.06-3.94A10 10 0 0 1 2 12Z"/><path d="M7 10a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"/><path d="M14 10a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"/><path d="M9.5 15c.65.65 1.5.98 2.5.98s1.85-.33 2.5-.98"/>
    </svg>
);


export const CalendarIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
);

export const PinIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
