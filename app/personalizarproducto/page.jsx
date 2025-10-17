'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../lib/firebase';

const productosNormal = [
  {
    nombre: "Taza mágica",
    imagen: "/img/taza-3d.png",
    precioBase: 384,
    colores: ['#FFFFFF', '#000000', '#FF0000'],
  },
  {
    nombre: "Camiseta",
    imagen: "/img/camiseta-3d.png",
    precioBase: 550,
    colores: ['#FFFFFF', '#000000', '#0070F3'],
  },
];

export default function PersonalizarPage() {
  const router = useRouter();
  const [seleccionado, setSeleccionado] = useState(productosNormal[0]);
  const [texto, setTexto] = useState('');
  const [imagenPreview, setImagenPreview] = useState(null);
  const [archivoImagen, setArchivoImagen] = useState(null);
  const [colorSeleccionado, setColorSeleccionado] = useState(productosNormal[0].colores[0]);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) router.push('/login');
    });
    return () => unsubscribe();
  }, [router]);

  const convertirImagenABase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleImagen = (e) => {
    const file = e.target.files[0];
    if (file) {
      setArchivoImagen(file);
      setImagenPreview(URL.createObjectURL(file));
    }
  };

  const handleAddToCart = async () => {
    let imagenFinal = seleccionado.imagen;
    if (archivoImagen) {
      imagenFinal = await convertirImagenABase64(archivoImagen);
    }

    const nuevoProducto = {
      id: Date.now(),
      name: seleccionado.nombre,
      price: seleccionado.precioBase,
      quantity: cantidad,
      designDetails: texto || 'Sin texto',
      color: colorSeleccionado,
      image: imagenFinal,
    };

    const carritoActual = JSON.parse(localStorage.getItem('carritoSublimArte') || '[]');
    localStorage.setItem('carritoSublimArte', JSON.stringify([...carritoActual, nuevoProducto]));

    alert(`✅ ${seleccionado.nombre} añadido al carrito`);
    router.push('/carrito');
  };

  const precioTotal = (seleccionado.precioBase * cantidad).toFixed(2);

  return (
    <div className="min-h-screen bg-[#f5f0e6] py-4 px-4">
      <h1 className="text-3xl font-bold text-pink-700 text-center mb-6">Personalización de Productos</h1>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Controles */}
        <div className="bg-white p-4 rounded-xl shadow-xl w-full lg:w-1/3">
          <h2 className="text-lg font-bold text-pink-600 border-b pb-2 mb-3">1. Elige tu Artículo</h2>
          <div className="flex gap-2 overflow-x-auto pb-3">
            {productosNormal.map((p) => (
              <button
                key={p.nombre}
                onClick={() => {
                  setSeleccionado(p);
                  setColorSeleccionado(p.colores[0]);
                }}
                className={`w-24 p-1 rounded-lg transition duration-200 shadow-sm ${
                  seleccionado.nombre === p.nombre
                    ? 'border-2 border-pink-500 bg-pink-50'
                    : 'border border-gray-300 hover:bg-gray-100'
                }`}
              >
                <img src={p.imagen} alt={p.nombre} className="h-10 mx-auto object-contain" />
                <p className="text-xs font-semibold text-center mt-1">{p.nombre}</p>
              </button>
            ))}
          </div>

          <div className="space-y-4 mt-4">
            <h2 className="text-lg font-bold text-pink-600 border-b pb-2 mb-2">2. Tu Diseño</h2>
            <input
              type="text"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              className="w-full p-2 border border-pink-300 rounded-md text-sm"
              placeholder="Escribe tu frase aquí"
              maxLength={30}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImagen}
              className="w-full text-xs text-gray-500 file:mr-2 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-pink-50 file:text-pink-700"
            />

            <h2 className="text-lg font-bold text-pink-600 border-b pt-2 pb-2 mb-2">3. Opciones</h2>
            <div className="flex justify-between items-center">
              <div>
                <label className="block mb-1 text-gray-700 font-medium text-sm">Color:</label>
                <div className="flex gap-2">
                  {seleccionado.colores.map((color) => (
                    <button
                      key={color}
                      onClick={() => setColorSeleccionado(color)}
                      style={{ backgroundColor: color }}
                      className={`w-6 h-6 rounded-full border-2 transition duration-200 ${
                        colorSeleccionado === color ? 'border-pink-500 shadow-md' : 'border-gray-300'
                      }`}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-1 text-gray-700 font-medium text-sm">Cantidad:</label>
                <input
                  type="number"
                  value={cantidad}
                  onChange={(e) => setCantidad(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                  className="w-16 p-1 border border-pink-300 rounded-md text-center text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Vista previa */}
        <div className="bg-white rounded-xl shadow-xl p-4 flex flex-col items-center w-full lg:w-2/3">
          <h2 className="text-xl font-bold text-pink-700 mb-4">Vista Previa: {seleccionado.nombre}</h2>
          <div className="relative w-full max-w-sm h-72 flex items-center justify-center mx-auto rounded-xl shadow-lg border border-gray-200 bg-gray-50">
            <img
              src={imagenPreview || seleccionado.imagen}
              alt={`Vista de ${seleccionado.nombre}`}
              className="max-h-60 object-contain"
              style={{ border: `2px solid ${colorSeleccionado}`, borderRadius: '4px' }}
            />
            <div className="absolute flex flex-col items-center justify-center p-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {texto && (
                <p className="text-sm font-bold text-black bg-white bg-opacity-70 p-0.5 rounded-sm">
                  {texto}
                </p>
              )}
            </div>
          </div>

          <div className="w-full max-w-sm mt-4 pt-4 text-center border-t border-gray-200">
            <p className="text-2xl font-extrabold text-gray-800 mb-3">
              Total: <span className="text-pink-700">RD${precioTotal}</span> (x{cantidad})
            </p>
            <button
              onClick={handleAddToCart}
              className="w-full bg-yellow-500 text-pink-900 text-lg font-bold py-3 rounded-full shadow-lg hover:bg-yellow-400"
            >
              Añadir {seleccionado.nombre} al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}