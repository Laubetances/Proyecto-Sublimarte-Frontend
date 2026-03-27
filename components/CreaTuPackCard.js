'use client';
import React from 'react';
import Link from 'next/link';
import { GiftIcon } from '@heroicons/react/24/solid';

const CreaTuPackCard = () => {
  return (
    <section className="w-full bg-pink-50 py-6 relative z-20"> 
      <div className="max-w-screen-lg mx-auto px-3">
        <div className="bg-white border border-pink-200 rounded-2xl p-6 shadow-md grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* BLOQUE DE IMÁGENES */}
          <div className="flex flex-row justify-center gap-4">
            <img 
              src="/img/Pack-2-productos-sublimacion.jpg"
              alt="Pack de tres productos personalizados"
              className="max-w-[160px] w-full object-contain rounded-md shadow-sm"
            />
            <img 
              src="/img/Pack-3-productos-sublimacion.jpg"
              alt="Pack de dos productos personalizados"
              className="max-w-[160px] w-full object-contain rounded-md shadow-sm"
            />
          </div>

          {/* BLOQUE DE TEXTO + BOTÓN */}
          <div className="text-right ml-auto md:pl-6">
            <div className="flex items-center justify-end mb-2">
              <GiftIcon className="h-6 w-6 text-pink-600 mr-2 flex-shrink-0" />
              <h2 className="text-base font-bold text-pink-700 leading-tight">
                ¡Crea tu Pack!
              </h2>
            </div>

            <p className="text-gray-800 text-sm font-medium mb-4">
              Elige <span className="text-pink-600 font-bold">2 o 3 productos</span> y obtén un <span className="text-pink-600 font-bold">pack único</span> con tus diseños favoritos.
            </p>

            <Link
              href="/configurador-packs"
              className="inline-block px-5 py-2 bg-pink-600 text-white text-sm font-semibold rounded-full hover:bg-pink-700 shadow-md transition uppercase tracking-wide"
            >
              ¡Armar Pack!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreaTuPackCard;
