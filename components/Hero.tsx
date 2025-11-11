
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-80 md:h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1600/900?random=1&blur=2&grayscale')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
          Selamat Datang di Pacitan
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
          Jelajahi keindahan pantai, gua eksotis, dan budaya yang mempesona di Kota 1001 Gua.
        </p>
      </div>
    </div>
  );
};
