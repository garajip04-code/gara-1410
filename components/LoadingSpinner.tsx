
import React from 'react';

export const LoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-10">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
    <p className="mt-4 text-gray-600 font-semibold">AI sedang menyusun rencana perjalanan terbaik...</p>
  </div>
);
