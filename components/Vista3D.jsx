'use client';
import React from 'react';

export default function Vista3D({ producto, imagen, texto, color }) {
  return (
    <div className="relative w-full max-w-lg h-96 flex items-center justify-center mx-auto border-2 border-pink-300 rounded-xl shadow-lg bg-white animate-fade-in">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="max-h-80 object-contain transition-transform duration-1000 ease-in-out animate-rotate-slow"
        style={{ border: `3px solid ${color}`, borderRadius: '8px' }}
      />

      <div className="absolute flex flex-col items-center justify-center p-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {imagen && (
          <img
            src={imagen}
            alt="Diseño subido"
            className="max-h-24 max-w-24 object-contain rounded-md shadow-md mb-2"
          />
        )}
        {texto && (
          <p className="text-xl font-bold text-black bg-white bg-opacity-80 p-1 rounded-sm">
            {texto}
          </p>
        )}
        {(!texto && !imagen) && (
          <p className="text-gray-400 italic">Aquí aparecerá tu diseño en vista 3D</p>
        )}
      </div>
    </div>
  );
}