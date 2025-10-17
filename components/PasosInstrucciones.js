
import React from 'react';
import { PencilSquareIcon, ArrowsRightLeftIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'; // Iconos de línea (outline)

const PasosInstrucciones = () => {
  return (
    
    <div className="w-full bg-white py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TÍTULO DE LA SECCIÓN */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Tu Regalo Personalizado en Solo 3 Pasos
        </h2>

        {/* CONTENEDOR DE PASOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* PASO 1: DISEÑA */}
          <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-lg">
            <div className="flex items-center justify-center h-16 w-16 mb-4 rounded-full bg-pink-100 text-pink-600 border-4 border-pink-200 font-black text-2xl">
              1
            </div>
            <PencilSquareIcon className="h-10 w-10 text-pink-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Diseña en 3D</h3>
            <p className="text-gray-600">Sube tus fotos o elige gráficos en nuestro configurador 360°.</p>
          </div>
          
          {/* PASO 2: CONFIRMA  */}
          <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-lg">
            <div className="flex items-center justify-center h-16 w-16 mb-4 rounded-full bg-pink-100 text-pink-600 border-4 border-pink-200 font-black text-2xl">
              2
            </div>
            <ArrowsRightLeftIcon className="h-10 w-10 text-pink-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Garantía Exacta</h3>
            <p className="text-gray-600">Lo que ves es lo que obtienes. Revisa tu diseño desde todos los ángulos.</p>
          </div>

          {/* PASO 3: RECIBE */}
          <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-lg">
            <div className="flex items-center justify-center h-16 w-16 mb-4 rounded-full bg-pink-100 text-pink-600 border-4 border-pink-200 font-black text-2xl">
              3
            </div>
            <ShoppingCartIcon className="h-10 w-10 text-pink-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Paga y Recibe</h3>
            <p className="text-gray-600">Completa tu pedido y lo enviaremos a tu puerta rápidamente.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PasosInstrucciones;