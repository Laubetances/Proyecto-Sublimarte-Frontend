'use client'; 

import React, { useState } from 'react';

// Genera un ID simple y único (usando el método estándar)
const generarIdUnico = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
};

// 🚩 NOTA: La función 'convertirImagenABase64' se ELIMINA porque ahora usamos Flask.

export default function Personalizar3D() {
    const [producto, setProducto] = useState('');
    // Almacena el objeto File (archivo binario)
    const [imagenFile, setImagenFile] = useState(null); 
    // Almacena la URL temporal local para la vista previa
    const [imagenPreview, setImagenPreview] = useState(null); 
    const [colorTexto, setColorTexto] = useState('#000000');
    const [texto, setTexto] = useState('');
    const [cantidad, setCantidad] = useState(1);
    // Nuevo estado para la carga
    const [isUploading, setIsUploading] = useState(false);

    const productos = [
        // Rutas de imágenes estáticas (Asegúrate de que la capitalización coincida)
        { id: 'taza', nombre: 'Taza Personalizada', descripcion: 'Ideal para diseños envolventes.', imagen: '/img/taza3dnueva.jpeg', price: 250.00 },
        { id: 'sueter', nombre: 'Suéter Personalizado', descripcion: 'Perfecto para logos y frases.', imagen: '/img/camiseta-3d.png', price: 800.00 },
        { id: 'termo', nombre: 'Termo de Agua', descripcion: 'Diseños verticales con impacto.', imagen: '/img/Termo-3d.png', price: 450.00 },
    ];

    const handleImagen = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagenFile(file); // Guarda el objeto File
            setImagenPreview(URL.createObjectURL(file)); // Crea una URL temporal para la vista previa local
        }
    };

    const handleGiro = (accion) => {
        // Mejor usar un console.log o un estado de mensaje en lugar de alert()
        console.log(`Simulando acción: ${accion} en el visor 3D.`);
    };

    const handleAgregarAlCarrito = async () => {
        const productoSeleccionado = productos.find(p => p.id === producto);

        if (!productoSeleccionado) {
            alert("Por favor, selecciona un producto primero.");
            return;
        }
        
        // ----------------------------------------------------
        // 🚩 1. NUEVA LÓGICA: SUBIR EL ARCHIVO BINARIO A FLASK
        // ----------------------------------------------------

        let imagenFinalUrl = null;
        
        if (imagenFile) {
            setIsUploading(true); // Activar indicador de carga
            try {
                // Objeto FormData para enviar el archivo
                const formData = new FormData();
                formData.append('designImage', imagenFile); 
                
                console.log("Iniciando subida del archivo binario a Flask (5000)...");
                
                const response = await fetch('http://localhost:5000/api/upload-design', {
                    method: 'POST',
                    body: formData,
                });
                
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(`Error ${response.status}: ${errorData.error}`);
                }

                const data = await response.json();
                // Esta es la URL pública que devolverá Flask (ej: http://localhost:5000/uploads/uuid.jpg)
                imagenFinalUrl = data.imageUrl; 
                
                console.log("✅ Imagen subida con éxito. URL pública:", imagenFinalUrl);

            } catch (error) {
                console.error("Error FATAL al subir la imagen:", error.message);
                alert(`Error al subir la imagen. Verifica que el servidor Flask esté corriendo. Detalle: ${error.message}.`);
                setIsUploading(false);
                return; // Detiene la adición al carrito si falla la subida
            } finally {
                setIsUploading(false); // Desactivar indicador de carga
            }
        }
        
        // ----------------------------------------------------
        // 2. CONSTRUCCIÓN DEL PRODUCTO Y GUARDADO
        // ----------------------------------------------------
        
        const nuevoProducto = {
            id: generarIdUnico(),
            name: productoSeleccionado.nombre,
            price: productoSeleccionado.price,
            quantity: cantidad, 
            customizationType: '3D', 
            // 🚩 CLAVE: Usamos la URL devuelta por Flask. Será null si no se subió imagen.
            imagen: imagenFinalUrl, 
            customizationDetails: {
                texto: texto,
                colorTexto: colorTexto,
                fecha: new Date().toISOString(),
            },
        };

        const carritoActual = JSON.parse(localStorage.getItem('carritoSublimArte') || '[]');
        
        // El tamaño de la URL es pequeño, por lo que el guardado en localStorage ya no debería fallar.
        try {
            localStorage.setItem('carritoSublimArte', JSON.stringify([...carritoActual, nuevoProducto]));
            console.log("💾 ¡Producto guardado con éxito en localStorage!");
        } catch (e) {
            console.error("❌ ERROR: Falló el guardado en localStorage. El error ya no es el tamaño de Base64, sino otro.", e);
            alert("Error al guardar el diseño. Ha ocurrido un error interno.");
            return; 
        }

        alert('¡Tu diseño ha sido subido y añadido al carrito!');
        
        // Resetear estados
        setProducto('');
        setImagenFile(null);
        setImagenPreview(null);
        setTexto('');
        setColorTexto('#000000');
        setCantidad(1);
    };

    const productoActual = productos.find(p => p.id === producto);
    const nombreProducto = productoActual ? productoActual.nombre : "Productos";
    
    // Cálculo de precios
    const precioUnitario = productoActual ? productoActual.price : 0;
    const precioTotal = precioUnitario * cantidad;

    return (
        <div className="min-h-screen flex flex-col items-center px-4 py-8">
            <h1 className="text-3xl font-bold text-pink-700 mb-6 text-center">
                Configurador Simple 3D de {nombreProducto}
            </h1>

            {!producto ? (
                <div className="max-w-5xl w-full mx-auto py-8">
                    <p className="text-gray-600 text-center mb-10 text-lg max-w-xl mx-auto">
                        Elige el producto que deseas personalizar.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {productos.map((p) => (
                            <div
                                key={p.id}
                                onClick={() => setProducto(p.id)}
                                className="bg-white rounded-xl shadow hover:shadow-pink-400 transition cursor-pointer p-6 text-center border-2 hover:border-pink-500"
                            >
                                <img src={p.imagen} alt={p.nombre} className="h-32 mx-auto mb-4 object-contain" />
                                <h3 className="text-lg font-bold text-gray-700">{p.nombre}</h3>
                                <p className="text-sm text-gray-500 mt-2">{p.descripcion}</p>
                                <p className="text-xl font-extrabold text-pink-600 mt-2">RD${p.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-xl p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* VISOR 3D */}
                    <div className="lg:col-span-2 space-y-4">
                        <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">
                            Visualización de Diseño
                        </h2>

                        <div className="relative w-full max-w-xl mx-auto border-4 border-gray-300 rounded-lg p-4">
                            <div className="text-center relative">
                                <p className="text-xl font-semibold text-gray-700 mb-4">
                                    (Vista Previa de {nombreProducto})
                                </p>

                                <img
                                    src={productoActual?.imagen || '/img/placeholder.png'}
                                    alt={producto}
                                    className="h-64 mx-auto object-contain filter drop-shadow-lg"
                                />

                                <p
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-extrabold z-10"
                                    style={{ color: colorTexto }}
                                >
                                    {texto || 'Tu Texto Aquí'}
                                </p>

                                {imagenPreview && (
                                    <img
                                        src={imagenPreview}
                                        alt="Diseño Preview"
                                        className="h-40 mx-auto rounded shadow absolute inset-0 m-auto z-[5]"
                                        style={{ opacity: 0.8 }}
                                    />
                                )}

                                <p className="text-sm text-gray-500 mt-4">
                                    Producto base: Blanco (Sublimación)
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center space-x-3 p-3 bg-gray-50 border rounded-lg">
                            <button
                                onClick={() => handleGiro('Girar 360')}
                                className="text-sm px-4 py-2 bg-pink-100 text-pink-700 rounded-full hover:bg-pink-200 transition"
                            >
                                🔄 Girar 360°
                            </button>
                            <button
                                onClick={() => handleGiro('Zoom')}
                                className="text-sm px-4 py-2 bg-pink-100 text-pink-700 rounded-full hover:bg-pink-200 transition"
                            >
                                🔎 Zoom + / -
                            </button>
                            <button
                                onClick={() => handleGiro('Vista Posterior')}
                                className="text-sm px-4 py-2 bg-pink-100 text-pink-700 rounded-full hover:bg-pink-200 transition"
                            >
                                Vista Posterior
                            </button>
                        </div>
                    </div>

                    {/* CONTROLES */}
                    <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l lg:pl-6 pt-4 lg:pt-0 space-y-6">
                        <h2 className="text-xl font-bold text-gray-900 border-b pb-2">
                            Controles Esenciales
                        </h2>

                        <div className="space-y-4">
                            {/* Sección de Precio Unitario */}
                            <div className="bg-pink-50 p-3 rounded-md border border-pink-200">
                                <p className="text-md font-semibold text-gray-700">Precio Unitario:</p>
                                <p className="text-2xl font-extrabold text-pink-700">RD${precioUnitario.toFixed(2)}</p>
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700">Texto a Sublimar</label>
                                <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Escribe aquí..." className="w-full p-2 border rounded-md" />
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700">Color de las Letras</label>
                                <input type="color" value={colorTexto} onChange={(e) => setColorTexto(e.target.value)} className="w-full h-10 p-1 border rounded-md" />
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700">Sube tu Imagen/Logo</label>
                                <input type="file" accept="image/*" onChange={handleImagen} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:file:text-pink-700 hover:file:bg-pink-100" />
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700">Cantidad</label>
                                <input
                                    type="number"
                                    value={cantidad}
                                    onChange={(e) => setCantidad(Math.max(1, parseInt(e.target.value) || 1))}
                                    min="1"
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                        </div>

                        <div className="pt-4 border-t mt-6">
                            {/* Sección de Precio Total */}
                            <div className="flex justify-between items-center mb-4 p-2 bg-pink-100 rounded-md">
                                <span className="text-xl font-bold text-gray-800">TOTAL ESTIMADO:</span>
                                <span className="text-2xl font-extrabold text-pink-700">RD${precioTotal.toFixed(2)}</span>
                            </div>
                            
                            <button
                                onClick={handleAgregarAlCarrito}
                                // Deshabilitar si está subiendo o si no hay producto seleccionado
                                disabled={isUploading || !producto || (imagenFile && isUploading)}
                                className={`w-full px-6 py-3 font-bold rounded-full transition shadow-xl 
                                    ${isUploading ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-pink-600 text-white hover:bg-pink-700'}`}
                                >
                                {isUploading ? (
                                    'Subiendo Diseño...' // Muestra estado de carga
                                ) : (
                                    'Confirmar Diseño y Añadir al Carrito'
                                )}
                            </button>
                            
                            <button
                                onClick={() => setProducto('')}
                                className="mt-4 w-full text-lg text-pink-600 underline hover:text-pink-800"
                            >
                                ← Cambiar producto
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
