
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Pacitan Wonderful. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-1">Discover the hidden paradise of Java.</p>
      </div>
    </footer>
  );
};
