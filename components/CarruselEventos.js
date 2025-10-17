'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const specialMoments = [
  { title: 'Navidad', imgSrc: '/img/navidad.jpg', link: '/categorias/navidad' },
  { title: 'San Valentín', imgSrc: '/img/san-valentin.png', link: '/categorias/san-valentin' },
  { title: 'Día del Padre', imgSrc: '/img/dia-del-padre.jpg', link: '/categorias/dia-del-padre' },
  { title: 'Día de la Madre', imgSrc: '/img/dia-de-las-madres.png', link: '/categorias/dia-de-la-madre' },
  { title: 'Cumpleaños', imgSrc: '/img/cumple.png', link: '/categorias/cumpleanos' },
  { title: 'Graduación', imgSrc: '/img/graduacion.png', link: '/categorias/graduacion' },
  { title: 'Aniversario', imgSrc: '/img/aniversario.png', link: '/categorias/aniversario' }, 
  { title: 'Bautizo', imgSrc: '/img/bautizo.png', link: '/categorias/Bautizo' }, 
];

export default function CarruselEventos() {
  return (
    <section className="bg-[#f8f4ef] py-16">
      <div className="max-w-full mx-auto px-4 2xl:px-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-10">
          Regalos para <span className="text-pink-600">momentos especiales</span>
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10} 
          slidesPerView={1}
          navigation
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 4, spaceBetween: 15 },
            1280: { slidesPerView: 5, spaceBetween: 15 }, 
            
          }}
          
          className="eventos-swiper-container"
        >
          {specialMoments.map((moment, index) => (
            <SwiperSlide key={index}>
              <Link 
                href={moment.link} 
                className="block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 group"
              >
                {/* */}
                <div className="relative w-full aspect-[4/5]"> 
                  <Image
                    src={moment.imgSrc}
                    alt={moment.title}
                    fill={true}
                    sizes="(max-width: 768px) 50vw, (max-width: 1279px) 20vw, 15vw" 
                    className="object-cover transition-opacity duration-500 group-hover:opacity-90"
                    priority={index < 6}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent text-white text-center py-4 font-semibold text-lg sm:text-xl">
                    {moment.title}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}