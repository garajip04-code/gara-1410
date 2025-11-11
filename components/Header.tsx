
import React from 'react';
import { LogoIcon } from './IconComponents';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center">
          <LogoIcon className="h-8 w-8 text-blue-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
            Pacitan <span className="text-blue-600">Wonderful</span>
          </h1>
        </div>
      </div>
    </header>
  );
};
