'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// 🚩 IMPORTAR EL COMPONENTE DE IMAGEN DE NEXT.JS
import Image from 'next/image'; 

// Componente individual del carrito
const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
    const currentQuantity = item.quantity || 1; 
    const is3D = item.customizationType === '3D'; 

    // 🚩 LÓGICA CORREGIDA: PRIORIZA CUALQUIER URL VÁLIDA (Flask URL o Base64)
    let imgSrc;
    
    if (item.imagen && typeof item.imagen === 'string') {
        // Opción 1: Si hay una URL de Flask O una Base64, úsala.
        imgSrc = item.imagen;
    } else {
        // Opción 2: Usa la imagen de producto por defecto o un placeholder.
        imgSrc = item.image || '/img/placeholder.png';
    }
    
    // Bandera para determinar si es Base64 (que requiere fill)
    const isBase64 = imgSrc.startsWith('data:image');
    
    // 🚩 Definir las dimensiones del contenedor
    const imageSize = 96; // w-24 h-24 es 96px x 96px
    
    // 🚩 Lógica para next/image: Si es Base64 o URL remota (Flask), usa fill. 
    // Si es estática local, usa width/height. Para simplificar, usaremos fill si es Base64 o URL remota.
    const isRemote = imgSrc.startsWith('http://') || imgSrc.startsWith('https://');

    const imageProps = isBase64 || isRemote ? { 
        fill: true, // Permite que la imagen se ajuste al padre
        sizes: `${imageSize}px`,
        // style: { objectFit: 'contain', backgroundColor: 'white' } // Estilos en línea forzados (ya no se necesitan con Tailwind)
    } : {
        width: imageSize, // Para imágenes estáticas (URLs locales), sí pasamos width/height
        height: imageSize,
    };


    return (
        <div className="flex items-center border-b border-gray-200 py-6">
            
            {/* 🚩 CONTENEDOR CON RELATIVE PARA next/image FILL */}
            <div className="w-24 h-24 mr-4 flex-shrink-0 relative"> 
                <Image
                    src={imgSrc}
                    alt={item.name || 'Producto personalizado'}
                    
                    // 🚩 Propiedades dinámicas para Base64/Flask URL vs. URL estática local
                    {...imageProps}

                    className={`
                        rounded-lg border border-gray-100
                        ${!isBase64 ? 'bg-white' : ''} 
                    `}
                    style={{ objectFit: 'contain' }} // Asegura que la imagen se contenga en el contenedor
                />
            </div>

            <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-800">
                    {item.name || 'Producto personalizado'} 
                </h3>

                {is3D ? (
                    <>
                        {/* Detalles de personalización 3D */}
                        <p className="text-sm text-gray-500 mt-1">Texto: "{item.customizationDetails?.texto || 'Sin texto'}"</p>
                        <p className="text-sm text-gray-500">Color: <span style={{ color: item.customizationDetails?.colorTexto }}>{item.customizationDetails?.colorTexto}</span></p>
                        <p className="text-sm text-gray-500">Fecha: {new Date(item.customizationDetails?.fecha).toLocaleDateString()}</p>
                        <p className="text-sm text-gray-500 font-bold text-pink-600">Diseño Subido: {isBase64 || isRemote ? 'Sí' : 'No'}</p>
                    </>
                ) : (
                    <>
                        {/* Detalles de personalización estándar (si aplica) */}
                        <p className="text-sm text-gray-500 mt-1">Personalizado: "{item.designDetails || 'N/A'}"</p>
                        <p className="text-sm text-gray-500">Color: {item.color || 'N/A'}</p>
                    </>
                )}
            </div>

            <div className="flex flex-col items-end space-y-2">
                <p className="text-lg font-semibold text-pink-600">
                    RD${((item.price || 5) * currentQuantity).toFixed(2)}
                </p>

                <input
                    type="number"
                    value={currentQuantity}
                    min="1"
                    onChange={(e) =>
                        onUpdateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-16 p-1 text-center border border-gray-300 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500"
                />

                <button
                    onClick={() => onRemove(item.id)}
                    className="text-xs text-red-500 hover:text-red-700 transition"
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default function CartPage() {
    // ⚠️ ATENCIÓN: Esta aplicación usa LocalStorage para el carrito. No hay persistencia de usuario.
    const [cartItems, setCartItems] = useState(() => {
        if (typeof window !== 'undefined') {
            // Mensaje de advertencia para el usuario si no está usando Firestore
            console.warn("Firebase config no está disponible. El carrito será temporal.");
            const saved = localStorage.getItem('carritoSublimArte');
            const parsed = saved ? JSON.parse(saved) : [];
            return parsed.map(item => ({
                ...item,
                // Asegura que la cantidad sea un número válido
                quantity: item.quantity || item.cantidad || 1, 
            }));
        }
        return [];
    });
    
    // Sincronizar el estado con LocalStorage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('carritoSublimArte', JSON.stringify(cartItems));
        }
    }, [cartItems]);
    
    // Cálculos de resumen
    const subtotal = cartItems.reduce((acc, item) => {
        const price = item.price || 5;
        const quantity = item.quantity || 1; 
        return acc + price * quantity;
    }, 0);
    
    const shippingCost = 150.0;
    const total = subtotal + shippingCost;
    
    // Manejadores de eventos
    const handleUpdateQuantity = (id, newQuantity) => {
        const quantity = parseInt(newQuantity, 10);
        if (quantity >= 1) {
            setCartItems(cartItems.map(item =>
                item.id === id ? { ...item, quantity: quantity } : item
            ));
        }
    };
    
    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };
    
    const handleClearCart = () => {
        setCartItems([]);
        if (typeof window !== 'undefined') {
            localStorage.removeItem('carritoSublimArte');
        }
    };
    
    return (
        <div className="bg-gray-50 min-h-[85vh] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-10">Tu Carrito de SublimArte</h1>
    
                {cartItems.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-xl shadow-xl">
                        <p className="text-xl text-gray-600 mb-6">Tu carrito está vacío. ¡Es hora de crear algo!</p>
                        <Link href="/productos" className="text-lg font-bold bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition duration-200 shadow-md">
                            Explorar Productos
                        </Link>
                    </div>
                ) : (
                    <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                        {/* Lista de artículos */}
                        <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-xl">
                            <h2 className="text-2xl font-bold border-b pb-4 mb-6 text-gray-800">
                                Detalles de la Orden ({cartItems.length} {cartItems.length === 1 ? 'Artículo' : 'Artículos'})
                            </h2>
    
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id} 
                                    item={item}
                                    onUpdateQuantity={handleUpdateQuantity}
                                    onRemove={handleRemoveItem}
                                />
                            ))}
    
                            <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center">
                                <Link href="/productos" className="text-pink-600 hover:text-pink-700 font-medium flex items-center transition duration-200">
                                    &larr; Seguir Comprando
                                </Link>
                                <button
                                    onClick={handleClearCart}
                                    className="text-sm text-red-600 underline hover:text-red-800 transition"
                                >
                                    Vaciar Carrito
                                </button>
                            </div>
                        </div>
    
                        {/* Resumen de la orden */}
                        <div className="lg:col-span-1 mt-8 lg:mt-0">
                            <div className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-pink-600">
                                <h2 className="text-2xl font-bold mb-6 text-gray-800">Resumen de la Orden</h2>
    
                                <div className="flex justify-between text-gray-700 mb-3">
                                    <span>Subtotal:</span>
                                    <span>RD${subtotal.toFixed(2)}</span>
                                </div>
    
                                <div className="flex justify-between text-gray-700 mb-4 pb-4 border-b border-gray-200">
                                    <span>Envío estimado:</span>
                                    <span>RD${shippingCost.toFixed(2)}</span>
                                </div>
    
                                <div className="flex justify-between text-xl font-extrabold text-gray-900 mb-6">
                                    <span>Total:</span>
                                    <span>RD${total.toFixed(2)}</span>
                                </div>
    
                                <Link
                                    href="/CheckoutPage"
                                    className="block w-full text-center text-lg font-bold bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-200 uppercase shadow-lg"
                                >
                                    Pagar Ahora
                                </Link>
    
                                <p className="text-xs text-gray-500 mt-4 text-center">
                                    Pago seguro y garantizado por SublimArte.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
