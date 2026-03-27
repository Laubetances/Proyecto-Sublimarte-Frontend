'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Array de imágenes para el carrusel
const carouselImages = [
  { src: '/img/gorra-sublimarte.jpg', alt: 'Gorra de sublimación', key: 'gorra' },
  { src: '/img/taza-sublimarte.png', alt: 'Taza de sublimación', key: 'taza' },
  { src: '/img/termo-de-agua.png', alt: 'Termo de sublimación', key: 'termo' },
];

export default function DisenoInmersivoBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 4,
    },
  };

  return (
    <section className="relative w-full py-10 sm:py-14 bg-gray-800 flex items-center justify-center overflow-hidden">
      {/* Rejilla sutil */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      ></div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-screen-lg mx-auto px-3 grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        {/* Carrusel de imágenes */}
        <div className="hidden md:flex justify-center items-center relative h-[280px] col-span-2 overflow-hidden rounded-lg">
          {carouselImages.map((img, index) => (
            <img
              key={img.key}
              src={img.src}
              alt={img.alt}
              className={`absolute w-full h-full object-contain drop-shadow-lg transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-90'
              }`}
            />
          ))}
        </div>

        {/* Texto y CTA */}
        <div className="col-span-1 md:col-span-3 ml-auto text-center md:pl-6">
          <h2 className="text-base sm:text-lg font-bold text-white leading-tight mb-3">
            Haz de tu Idea una{' '}
            <span className="text-pink-500 block sm:inline-block">Realidad en 3D</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300 max-w-md mb-5 ml-auto md:pr-6 md:pl-0">
            Visualiza, Gira y Personaliza. Garantizamos que el producto final será
            <strong className="text-white"> exactamente </strong> lo que ves.
          </p>

          <motion.div animate={pulseAnimation} className="inline-block">
            <Link
              href="/personalizar"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold rounded-full text-white bg-pink-600 hover:bg-pink-700 shadow-md transition duration-300 ease-in-out uppercase tracking-wide hover:shadow-pink-400/50"
            >
              ¡Diseña Ahora!
            </Link>
          </motion.div>

          {/* Beneficios */}
          <div className="mt-4 flex flex-col justify-center mx-auto text-white text-xs font-medium opacity-90">
            <p className="mt-1 text-center">✅ Garantía de Satisfacción</p>
            <p className="mt-1 text-center">🚚 Envío Rápido</p>
            <p className="mt-1 text-center">🌐 Tecnología 360°</p>
          </div>
        </div>
      </div>
    </section>
  );
}
