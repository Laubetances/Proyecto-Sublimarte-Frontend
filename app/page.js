'use client'; 
import React, { useState, useEffect } from 'react'; 


import SeccionDestacados from "@/components/ProductosDestacados"; 
import Footer from "@/components/Footer";
import PasosInstrucciones from '@/components/PasosInstrucciones';
import CreaTuPackCard from '@/components/CreaTuPackCard';
import Producto3DSection from '@/components/Producto3DSection';
import ConfianzaClientes from '@/components/ConfianzaClientes';
import CarruselEventos from '@/components/CarruselEventos';
 
// Array de imágenes para el slider
const bannerImages = [
    '/img/banner.png', 
    '/img/regalos.png', 
    '/img/taza1.png', 
    '/img/banner2.png', 
    '/img/caja sublimarte.png', 
    '/img/amigos.png', 
     
];
export default function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Temporizador de 3 segundos para el cambio de imagen
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % bannerImages.length
            );
        }, 3000); 

        return () => clearInterval(intervalId);
    }, []); 

    const currentImageUrl = bannerImages[currentImageIndex];

return (
        <>
{/*  */}
            {/* -------------------------------------------------- */}
            <div className="w-full bg-beige py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    
                    {/* Título Principal */}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-2"> 
                        Regala emociones, no objetos
                    </h1>
                    
                    {/* Sub-texto */}
                    <p className="text-lg fonte-bold text-black mb-6 max-w-2xl mx-auto">
                        En SublimArte, cada Producto Cuenta una Historia. Personaliza, Crea y Sorprende.
                    </p>
                    
                    {/* FRASE DE BIENVENIDA */}
                    <h2 className="text-2xl font-bold text-yellow-500 mt-10">
                        ¡Bienvenido a tu Espacio Creativo!
                    </h2>
                    <p className="text-base fonte-bold text-black mt-2">
                        Inspírate con nuestros favoritos o da rienda suelta a tu imaginación.
                    </p>
                </div>
            </div>
            {/* -------------------------------------------------- */}


            {/* 🔥 Banner DINÁMICO) */}
            <section
                className="w-screen bg-no-repeat relative transition-all duration-1000 ease-in-out"
                style={{
                    backgroundImage: `url('${currentImageUrl}')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    paddingBottom: '60%', 
                    height: "0",
                }}
            >
                {/* */}
                <div className="absolute inset-0 z-10">
                    {/* */}
                </div>
            </section>
            
            {/* 🧩 Sección de productos destacados */}
            <SeccionDestacados />
           <CreaTuPackCard /> 
           <PasosInstrucciones/>
            <Producto3DSection/>
            <CarruselEventos/>
            <ConfianzaClientes/>
           
        </>
    );
}