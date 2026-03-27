import React from 'react';
import { PencilSquareIcon, ArrowsRightLeftIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const PasosInstrucciones = () => {
  return (
    <div className="w-full bg-white py-6 sm:py-8">
      <div className="max-w-4xl mx-auto px-3">
        
        {/* TÍTULO DE LA SECCIÓN */}
        <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-6 text-center">
          Tu Regalo en 3 Pasos
        </h2>

        {/* CONTENEDOR DE PASOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* PASO 1: DISEÑA */}
          <div className="flex flex-col items-center text-center p-3 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-center h-10 w-10 mb-2 rounded-full bg-pink-100 text-pink-600 border-2 border-pink-200 font-bold text-sm">
              1
            </div>
            <PencilSquareIcon className="h-6 w-6 text-pink-600 mb-2" />
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Diseña en 3D</h3>
            <p className="text-xs text-gray-600">Sube tus fotos o usa nuestro configurador 360°.</p>
          </div>
          
          {/* PASO 2: CONFIRMA */}
          <div className="flex flex-col items-center text-center p-3 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-center h-10 w-10 mb-2 rounded-full bg-pink-100 text-pink-600 border-2 border-pink-200 font-bold text-sm">
              2
            </div>
            <ArrowsRightLeftIcon className="h-6 w-6 text-pink-600 mb-2" />
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Garantía Exacta</h3>
            <p className="text-xs text-gray-600">Revisa tu diseño desde todos los ángulos.</p>
          </div>

          {/* PASO 3: RECIBE */}
          <div className="flex flex-col items-center text-center p-3 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-center h-10 w-10 mb-2 rounded-full bg-pink-100 text-pink-600 border-2 border-pink-200 font-bold text-sm">
              3
            </div>
            <ShoppingCartIcon className="h-6 w-6 text-pink-600 mb-2" />
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Paga y Recibe</h3>
            <p className="text-xs text-gray-600">Completa tu pedido y recíbelo rápido.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PasosInstrucciones;

