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
    <div className="min-h-screen bg-[#f5f0e6] py-6 px-3">
      <h1 className="text-base font-bold text-pink-700 text-center mb-3">Nuestros Productos</h1>

      {mensaje && (
        <div className="text-center mb-3 text-green-600 text-xs font-medium">{mensaje}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {productos.map((p) => (
          <div key={p.id} className="bg-white rounded-md shadow-sm p-3 text-center">
            <img src={p.imagen} alt={p.nombre} className="h-20 mx-auto mb-2 object-contain" />
            <h3 className="text-sm font-semibold text-gray-800">{p.nombre}</h3>
            <p className="text-xs text-gray-500">Color: {p.color}</p>
            <p className="text-xs text-gray-500 mb-1">Diseño: {p.diseño}</p>
            <p className="text-pink-600 font-bold text-sm mb-2">RD${p.precio.toFixed(2)}</p>
            <button
              onClick={() => handleAgregarAlCarrito(p)}
              className="bg-pink-600 text-white px-3 py-1 text-xs rounded-full hover:bg-pink-700 transition"
            >
              Añadir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
