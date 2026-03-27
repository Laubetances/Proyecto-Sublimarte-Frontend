'use client';
import React from 'react';

// Datos de testimonios simulados
const testimonios = [
  {
    texto: "La calidad de la sublimación superó mis expectativas. Los colores son increíbles y la taza llegó rapidísimo.",
    autor: "Laura G.",
    color: 'border-yellow-400'
  },
  {
    texto: "Poder ver mi diseño en 3D me dio total confianza. No tuve que adivinar cómo quedaría el resultado final.",
    autor: "Marco P.",
    color: 'border-pink-500'
  },
  {
    texto: "¡El mejor regalo! El equipo me ayudó a centrar la imagen perfectamente. Los recomiendo 100%.",
    autor: "Sofía R.",
    color: 'border-yellow-400'
  },
];

export default function ConfianzaClientes() {
  return (
    <section className="bg-white py-8 px-3">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-lg font-bold text-center text-pink-700 mb-2">
          Más de 1,500 Clientes Satisfechos
        </h2>
        <div className="text-center mb-6">
          {/* Indicador de estrellas */}
          <div className="text-2xl text-yellow-500 mb-1">★★★★★</div> 
          <p className="text-sm text-gray-600 font-semibold">4.9/5 en Reseñas Verificadas</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonios.map((t, index) => (
            <div 
              key={index}
              className={`bg-white p-3 rounded-lg shadow-md transition duration-300 hover:shadow-pink-300/50 
                         border-t-4 ${t.color}`} 
            >
              <p className="text-sm italic text-gray-700 mb-2 h-[80px] flex items-center">
                "{t.texto}"
              </p>
              <div className="flex justify-between items-center border-t pt-2">
                <p className="font-bold text-pink-700 text-sm">{t.autor}</p>
                <p className="text-[11px] text-gray-400">Cliente Verificado</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => alert("Simulando que se abre un formulario para escribir un comentario...")}
            className="inline-flex items-center bg-pink-600 text-white font-semibold py-2 px-5 rounded-full shadow-md hover:bg-pink-700 transition duration-300 text-sm uppercase tracking-wide"
          >
            <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
            </svg>
            Escribe tu Opinión
          </button>
        </div>

        {/* CTA para ver más */}
        <div className="text-center mt-6">
          <a 
            href="/opiniones"
            className="text-xs font-semibold text-pink-700 hover:text-pink-500 transition duration-200 border-b border-pink-700"
          >
            Ver todas las 1,532 opiniones →
          </a>
        </div>
      </div>
    </section>
  );
}
