'use client'; 
import React, { useState } from 'react';

export default function DevolucionPage() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [orden, setOrden] = useState('');
  const [motivo, setMotivo] = useState('');
  const [imagen, setImagen] = useState(null); 

  const handleFileChange = (e) => setImagen(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email || !orden || !motivo || !imagen) {
      alert("Complete todos los campos requeridos (incluyendo la imagen).");
      return;
    }
    alert(`Solicitud recibida. Imagen: ${imagen.name}`);
    setNombre(''); setEmail(''); setOrden(''); setMotivo(''); setImagen(null);
  };

  return (
    <div className="bg-white min-h-screen"> 
      {/* Encabezado */}
      <div className="pt-8 pb-6 bg-pink-50/50 shadow-inner">
        <div className="max-w-2xl mx-auto text-center px-3">
          <h2 className="text-base font-bold text-pink-700 mb-2">Devoluciones y Garantía</h2>
          <p className="text-sm text-gray-700 mb-1">Revise nuestra política y use el formulario.</p>
          <p className="text-xs text-gray-600">Plazo máximo: 15 días tras la entrega.</p>
        </div>
      </div>

      {/* Imagen */}
      <div className="max-w-xs mx-auto rounded-md overflow-hidden shadow-sm my-4">
        <img src="/img/devolucion.png" alt="Proceso de devolución" className="w-full h-auto object-contain" />
      </div>

      {/* Contenido */}
      <section className="w-full py-6">
        <div className="space-y-4 text-left max-w-2xl mx-auto px-3">
          
          {/* Política */}
          <div className="bg-white p-3 rounded-md shadow-sm border border-gray-100">
            <h3 className="text-sm font-bold text-pink-700 mb-2">📦 Condiciones</h3>
            <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 ml-3">
              <li>Solo devoluciones por artículos dañados o incorrectos.</li>
              <li>Plazo máximo: 15 días calendario.</li>
              <li>No se aceptan devoluciones por errores del cliente.</li>
              <li>Foto obligatoria como evidencia.</li>
            </ul>
          </div>

          {/* Formulario */}
          <div className="bg-white p-3 rounded-md shadow-sm border border-gray-100">
            <h3 className="text-sm font-bold text-pink-700 mb-3">📝 Solicitud</h3>
            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="w-full md:w-1/2">
                  <label htmlFor="nombre">Nombre (*)</label>
                  <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}
                    className="w-full p-1 border border-pink-300 rounded" required />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="email">Correo (*)</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-1 border border-pink-300 rounded" required />
                </div>
              </div>

              <div>
                <label htmlFor="orden">Orden (*)</label>
                <input type="text" id="orden" value={orden} onChange={(e) => setOrden(e.target.value)}
                  className="w-full p-1 border border-pink-300 rounded" required />
              </div>

              <div className="bg-pink-50 p-2 rounded border border-pink-200">
                <label htmlFor="imagen" className="font-bold">Foto de evidencia (*)</label>
                <input type="file" id="imagen" accept="image/*" onChange={handleFileChange}
                  className="w-full text-xs mt-1" required />
                {imagen && <p className="text-[10px] text-green-700 mt-1">Archivo: {imagen.name}</p>}
              </div>

              <div>
                <label htmlFor="motivo">Motivo (*)</label>
                <textarea id="motivo" rows="3" value={motivo} onChange={(e) => setMotivo(e.target.value)}
                  className="w-full p-1 border border-pink-300 rounded" required />
              </div>

              <button type="submit"
                className="w-full py-2 bg-pink-700 text-white text-xs font-semibold rounded hover:bg-pink-800">
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
