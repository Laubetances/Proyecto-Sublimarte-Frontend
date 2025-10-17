
'use client'; 
import React from 'react';
import Link from 'next/link'; 

export default function PersonalizarSelector() {
  return (
    <div className="min-h-screen bg-[#f5f0e6] flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold text-pink-700 mb-6 text-center">
        ¿Cómo quieres personalizar tu producto?
      </h1>

      <p className="text-gray-600 text-center mb-10 text-lg">
        Elige el tipo de experiencia que deseas para tu diseño.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* 🚨 OPCIÓN 1: Diseño Normal (Ruta: /personalizar/nomal) */}
        <Link href="/personalizarproducto" passHref className="w-72">
            <div
                className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow hover:border-pink-500 transition w-full h-full text-center cursor-pointer"
            >
                <img src="/img/taza.jpg" alt="Normal" className="h-24 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-700">Diseño Estándar</p>
                <p className="text-sm text-gray-500 mt-2">Ideal para productos planos y simples</p>
            </div>
        </Link>

        {/* 🚨 OPCIÓN 2: Diseño 3D (Ruta: /personalizar/3d) */}
        <Link href="/personalizar/3d" passHref className="w-72">
            <div
                className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow hover:border-pink-500 transition w-full h-full text-center cursor-pointer"
            >
                <img src="/img/taza-sublimarte.png" alt="3D" className="h-24 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-700">Diseño 3D</p>
                <p className="text-sm text-gray-500 mt-2">Vista avanzada con simulación visual</p>
            </div>
        </Link>
      </div>
    </div>
  );
}