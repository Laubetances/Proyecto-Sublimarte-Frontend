'use client';
import React, { useState } from 'react';

const productos = [
  {
    id: 'taza',
    nombre: 'Taza Personalizada',
    precio: 350,
    imagen: '/img/taza.jpg',
    color: 'Blanco',
    diseño: 'Sin diseño',
  },
  {
    id: 'camiseta',
    nombre: 'Camiseta Elegante',
    precio: 600,
    imagen: '/img/camiseta.jpg',
    color: 'Negro',
    diseño: 'Logo frontal',
  },
  {
    id: 'llavero',
    nombre: 'Llavero Metálico',
    precio: 250,
    imagen: '/img/llavero.png',
    color: 'Plateado',
    diseño: 'Texto grabado',
  },
];

export default function ProductosPage() {
  const [mensaje, setMensaje] = useState('');

  const handleAgregarAlCarrito = (producto) => {
    const nuevoProducto = {
      id: Date.now(),
      name: producto.nombre,
      price: producto.precio,
      quantity: 1,
      designDetails: producto.diseño,
      color: producto.color,
      image: producto.imagen,
    };

    const carritoActual = JSON.parse(localStorage.getItem('carritoSublimArte') || '[]');
    localStorage.setItem('carritoSublimArte', JSON.stringify([...carritoActual, nuevoProducto]));

    setMensaje(`✅ ${producto.nombre} añadido al carrito`);
    setTimeout(() => setMensaje(''), 3000);
  };

  return (
    <div className="min-h-screen bg-[#f5f0e6] py-12 px-6">
      <h1 className="text-4xl font-bold text-pink-700 text-center mb-6">Nuestros Productos</h1>

      {mensaje && (
        <div className="text-center mb-6 text-green-600 font-semibold">{mensaje}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {productos.map((p) => (
          <div key={p.id} className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img src={p.imagen} alt={p.nombre} className="h-32 mx-auto mb-4 object-contain" />
            <h3 className="text-lg font-bold text-gray-800">{p.nombre}</h3>
            <p className="text-sm text-gray-500 mt-1">Color: {p.color}</p>
            <p className="text-sm text-gray-500 mb-2">Diseño: {p.diseño}</p>
            <p className="text-pink-600 font-bold text-lg mb-4">RD${p.precio.toFixed(2)}</p>
            <button
              onClick={() => handleAgregarAlCarrito(p)}
              className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
            >
              Añadir al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}