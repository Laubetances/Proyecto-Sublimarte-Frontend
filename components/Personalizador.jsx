'use client';
import React from 'react';

export default function Personalizador({ tipo }) {
  return (
    <div className="min-h-screen bg-[#f5f0e6] flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold text-pink-700 mb-6 text-center">
        Personalización {tipo === '3D' ? 'Avanzada en 3D' : 'Estándar'}
      </h1>

      <p className="text-gray-600 text-center mb-10 text-lg max-w-xl text-justify">
        {tipo === '3D'
          ? 'Explora tu producto en 360°, gira, visualiza y personaliza con precisión. Ideal para tazas, termos y objetos con volumen.'
          : 'Sube tu diseño, elige colores y personaliza productos planos como camisetas, mousepads o llaveros.'}
      </p>

      {/*  configurador real */}
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-xl p-8">
        <p className="text-center text-gray-500">
          Aquí irá el configurador interactivo para tipo: <strong>{tipo}</strong>
        </p>
      </div>
    </div>
  );
}