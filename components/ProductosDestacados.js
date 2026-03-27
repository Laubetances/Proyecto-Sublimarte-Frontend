'use client';
import Image from 'next/image';

// 🎨 Tarjeta individual
function TarjetaProducto({ nombre, precio, imagen, etiqueta, isCTA }) {
    
    // Si es la Tarjeta CTA, renderizamos un diseño diferente
    if (isCTA) {
        return (
            <div className="relative bg-pink-600 rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center justify-center h-[460px] w-[340px] mx-auto p-8 transform hover:scale-105 transition duration-300 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mb-4 text-white animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm10 2a1 1 0 100 2 1 1 0 000-2zm-6 8a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                </svg>
                <h3 className="text-3xl font-extrabold mb-3">¿Tienes una idea?</h3>
                <p className="text-lg text-center mb-6">Convierte tus diseños en un recuerdo único.</p>
                <a href="/personalizar"  className="bg-yellow-400 text-pink-900 text-lg px-8 py-3 rounded-full shadow-xl hover:bg-yellow-300 transition font-bold">
                    Diseña Desde Cero
                </a>
            </div>
        );
    }
    
    // Renderización normal de producto
    return (
        <div className="relative bg-white rounded-3xl shadow-2xl border border-pink-100 overflow-hidden transform hover:scale-105 hover:shadow-pink-300 transition duration-300 text-center w-[340px] mx-auto">
            {etiqueta && (
                <span className="absolute top-4 left-4 bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
                    {etiqueta}
                </span>
            )}

            {/* 📸 Imagen destacada */}
            <div className="bg-gradient-to-t from-amber-50 to-white p-4 rounded-t-3xl">
                <Image
                    src={imagen}
                    alt={nombre}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover rounded-2xl shadow-md"
                />
            </div>

            {/* 📦 Contenido emocional */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-pink-700 mb-2">{nombre}</h3>
                <p className="text-lg text-gray-600 italic mb-4">
                    Desde **RD${precio}**
                </p>
                <a href="/personalizarproducto" className="bg-pink-600 text-white text-sm px-6 py-2 rounded-full shadow-lg hover:bg-yellow-500 hover:text-pink-900 transition font-semibold">
                    Personalizar
                </a>
            </div>
        </div>
    );
}


// 🧩 Sección de destacados
export default function SeccionDestacados() { 
    const productosDestacados = [
        {
            id: 1,
            nombre: "Taza Personalizada",
            precio: 350,
            imagen: "/img/taza.jpg",
            etiqueta: "Top Ventas", 
        },
        {
            id: 2,
            nombre: "Gorra Personalizada",
            precio: 550,
            imagen: "/img/gorra.jpg",
            etiqueta: "Nuevo",
        },
        {
            id: 3,
            nombre: "Camiseta Elegante",
            precio: 250,
            imagen: "/img/camiseta.jpg",
        },
        {
            id: 4,
            nombre: "Llavero Personalizado",
            precio: 250,
            imagen: "/img/llavero.png",
            etiqueta: "Con color",
        },
        {
            id: 5,
            nombre: "Cojín Personalizado",
            precio: 480,
            imagen: "/img/cojin.jpg",
            etiqueta: "Favorito",
        },
        // Tarjeta CTA al final de la lista
        { id: 6, isCTA: true }, 
    ];

    return (
        <main className="bg-white min-h-screen pt-8 py-16" id="productos">
            {/* Título más emocional */}
            <h2 className="text-2xl font-extrabold text-center mb-12 text-gray-900">
                Inspírate con nuestros {" "}
                <span className="text-pink-600">Favoritos</span>
            </h2>

            {/* 🎠 Carrusel horizontal con ajuste de padding-bottom en las tarjetas */}
            <div className="overflow-x-auto whitespace-nowrap scroll-smooth px-4 pb-8"> 
                {productosDestacados.map((producto) => (
                    <div key={producto.id} className="inline-block align-top mx-4">
                        <TarjetaProducto
                            nombre={producto.nombre}
                            precio={producto.precio}
                            imagen={producto.imagen}
                            etiqueta={producto.etiqueta}
                            isCTA={producto.isCTA} 
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}