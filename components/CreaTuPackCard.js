'use client';
import React from 'react';
import Link from 'next/link';
import { GiftIcon } from '@heroicons/react/24/solid';

const CreaTuPackCard = () => {
  return (
    <section className="w-full bg-pink-50 py-0 -mt-100"> 
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border-2 border-pink-200 rounded-3xl p-12 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* BLOQUE DE IMÁGENES */}
          <div className="flex flex-row justify-center gap-8">
            <img 
              src="/img/pack-2-productos-sublimacion.jpg"
              alt="Pack de tres productos personalizados"
              className="max-w-sm w-full object-contain rounded-xl shadow-md"
            />
            <img 
              src="/img/pack-3-productos-sublimacion.jpg"
              alt="Pack de dos productos personalizados"
              className="max-w-sm w-full object-contain rounded-xl shadow-md"
            />
          </div>

          {/* BLOQUE DE TEXTO + BOTÓN */}
          <div className="text-right ml-auto md:pl-10">
            <div className="flex items-center justify-end mb-4">
              <GiftIcon className="h-10 w-10 text-pink-600 mr-3 flex-shrink-0" />
              <h2 className="text-5xl font-extrabold text-pink-700 leading-tight">
                ¡Crea tu Pack Personalizado!
              </h2>
            </div>

            <p className="text-gray-800 text-lg sm:text-xl font-medium mb-8">
              Elige <span className="text-pink-600 font-bold">2 o 3 productos</span> entre nuestras categorías y obtén un <span className="text-pink-600 font-bold">pack único</span> con tus diseños favoritos.
            </p>

            <Link
              href="/configurador-packs"
              className="inline-block px-10 py-4 bg-pink-600 text-white text-lg font-bold rounded-full hover:bg-pink-700 shadow-xl transition uppercase tracking-wider"
            >
              ¡ARMAR MI PACK AHORA!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreaTuPackCard;