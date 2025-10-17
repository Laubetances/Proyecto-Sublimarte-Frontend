
'use client'; 
import React, { useState } from 'react';

export default function DevolucionPage() {
    // 1. Estados del formulario (manteniéndose)
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [orden, setOrden] = useState('');
    const [motivo, setMotivo] = useState('');
    const [imagen, setImagen] = useState(null); 

    const handleFileChange = (e) => {
        setImagen(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!nombre || !email || !orden || !motivo || !imagen) {
            alert("Por favor, complete todos los campos requeridos (incluyendo la imagen).");
            return;
        }

        console.log("Datos a enviar:", { nombre, email, orden, motivo, imagen: imagen.name });

        alert(`Solicitud de devolución recibida. Nos pondremos en contacto pronto.\nImagen adjunta: ${imagen.name}`);
        
        setNombre('');
        setEmail('');
        setOrden('');
        setMotivo('');
        setImagen(null);
    };

    return (
        <div className="bg-white min-h-screen"> 
            
            {/* SECCIÓN 1: ENCABEZADO PRINCIPAL Y TÍTULO (Mismo estilo que Términos) */}
            <div className="pt-16 pb-10 bg-pink-50/50 shadow-inner">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-5xl font-extrabold text-pink-700 mb-6 drop-shadow-md">
                        Devoluciones y Garantía
                    </h2>
                    <p className="text-lg text-gray-700 mb-2 max-w-2xl mx-auto drop-shadow-sm">
                        Revise nuestra política y use el formulario para iniciar su solicitud de cambio o reembolso.
                    </p>
                    <p className="text-xl text-black-500">
                        Plazo máximo para reclamaciones: 15 días tras la entrega.
                    </p>
                </div>
            </div>

            {/* SECCIÓN 2: IMAGEN CON FONDO BEIGE  */}
            <div className="relative left-1/2 -ml-[50vw] w-screen bg-[#f5f0e6] py-10 my-8 shadow-inner">
                <div className="max-w-xl mx-auto rounded-xl overflow-hidden shadow-2xl">
                    <img
                        src="/img/devolucion.png" 
                        alt="Proceso de devolucion"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* SECCIÓN 3: CONTENIDO PRINCIPAL (POLÍTICA Y FORMULARIO) */}
            <section className="w-full py-12">
                <div className="space-y-8 text-left max-w-4xl mx-auto px-6">
                    
                    {/* Tarjeta 1: Política (Contenido Estático) */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-shadow hover:shadow-xl">
                        <h3 className="text-2xl font-bold text-pink-700 mb-3">📦 1. Condiciones de Devolución</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed ml-4">
                            <li>Solo se aceptan devoluciones o cambios por **artículos dañados** o si el producto enviado es **incorrecto**.</li>
                            <li>El plazo máximo para notificar un problema es de **15 días** calendario después de recibir el pedido.</li>
                            <li>**Artículos Personalizados:** No se aceptan devoluciones por errores tipográficos o de diseño cometidos por el cliente al momento de hacer el pedido.</li>
                            <li>**Evidencia Visual:** Una fotografía del defecto o error es **obligatoria** para procesar la reclamación.</li>
                        </ul>
                    </div>

                    {/* Tarjeta 2: Formulario de Solicitud (Donde se sube la imagen) */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-shadow hover:shadow-xl">
                        <h3 className="text-2xl font-bold text-pink-700 mb-6">📝 2. Iniciar Solicitud (Paso a Paso)</h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Nombre y Email (en línea) */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full md:w-1/2">
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre Completo (*)</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        className="mt-1 w-full p-2 border border-pink-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                                        required
                                    />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico (*)</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="mt-1 w-full p-2 border border-pink-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                                        required
                                    />
                                </div>
                            </div>
                            
                            {/* Número de Orden */}
                            <div>
                                <label htmlFor="orden" className="block text-sm font-medium text-gray-700">Número de Orden (*)</label>
                                <input
                                    type="text"
                                    id="orden"
                                    value={orden}
                                    onChange={(e) => setOrden(e.target.value)}
                                    className="mt-1 w-full p-2 border border-pink-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                                    required
                                />
                            </div>

                            {/* Campo de Imagen (Evidencia) */}
                            <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                                <label htmlFor="imagen" className="block text-sm font-bold text-gray-800 mb-2">
                                    Adjuntar FOTO DE EVIDENCIA (*Obligatorio)
                                </label>
                                <input
                                    type="file"
                                    id="imagen"
                                    accept="image/*"
                                    onChange={handleFileChange} 
                                    className="mt-1 w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-300 file:text-pink-900 hover:file:bg-pink-400 cursor-pointer"
                                    required
                                />
                                {imagen && (
                                    <p className="text-xs text-green-700 mt-2">Archivo seleccionado: {imagen.name}</p>
                                )}
                            </div>
                            
                            {/* Motivo */}
                            <div>
                                <label htmlFor="motivo" className="block text-sm font-medium text-gray-700">Motivo de la Devolución/Cambio (*)</label>
                                <textarea
                                    id="motivo"
                                    rows="4"
                                    value={motivo}
                                    onChange={(e) => setMotivo(e.target.value)}
                                    className="mt-1 w-full p-2 border border-pink-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                                    placeholder="Describa claramente el defecto o el error en el envío."
                                    required
                                />
                            </div>

                            {/* Botón de Envío */}
                            <button
                                type="submit"
                                className="w-full py-3 mt-6 bg-pink-700 text-white text-lg font-bold rounded-md shadow-xl hover:bg-pink-800 transition duration-300"
                            >
                                Enviar Solicitud de Devolución
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}