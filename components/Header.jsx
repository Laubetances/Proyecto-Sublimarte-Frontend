'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../context/CartContext'; // Corregida la ruta
import { ShoppingCart, User, Search, Menu, X, Phone } from 'lucide-react'; 

export default function Header() {
    const { totalItems } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Enlaces de navegación
    const navLinks = [
        { title: "Inicio", href: "/" },
        { title: "Productos", href: "/productos" },
        { title: "Nosotros", href: "/nosotros" },
        { title: "Crea tu Diseño", href: "/ComoPersonalizar" },
    ];

    return (
        <header className="bg-white shadow-xl w-full sticky top-0 z-50">
            <div className="h-24 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                
                {/* Lado Izquierdo: Logo y Título (Pegado a la esquina) */}
                <Link href="/" className="flex items-center space-x-3">
                    <Image
                        src="/img/logo-sublimart.png"
                        alt="Logo SublimArte"
                        width={50}
                        height={50}
                        className="rounded-full shadow-md"
                        priority
                    />
                    <span className="hidden sm:inline text-2xl font-extrabold text-pink-600 tracking-tighter">
                        SublimArte
                    </span>
                </Link>

                {/* Lado Derecho: Navegación Principal e Íconos */}
                <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-700">
                    
                    {/* Enlaces */}
                    {navLinks.map((link) => (
                        <Link key={link.title} href={link.href} className="hover:text-pink-600 transition">
                            {link.title}
                        </Link>
                    ))}

                    {/* Iconos de Acción */}
                    <div className="flex items-center space-x-5">
                        <button 
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="p-2 hover:text-pink-600 transition" 
                            aria-label="Abrir buscador"
                        >
                            <Search className="w-6 h-6" />
                        </button>
                        <Link href="/login" className="p-2 hover:text-pink-600 transition" aria-label="Perfil de usuario">
                            <User className="w-6 h-6" />
                        </Link>
                        <Link href="/carrito" className="p-2 hover:text-pink-600 transition relative" aria-label="Carrito de compras">
                            <ShoppingCart className="w-6 h-6" />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                    </div>
                </nav>

                {/* Botón de Menú Hamburguesa (Móvil) */}
                <div className="lg:hidden flex items-center space-x-3">
                    <Link href="/carrito" className="p-2 hover:text-pink-600 transition relative" aria-label="Carrito de compras">
                        <ShoppingCart className="w-6 h-6" />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="p-2 text-gray-700 hover:text-pink-600 transition"
                        aria-label="Menú principal"
                    >
                        {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* BARRA DE BÚSQUEDA DESPLEGABLE (Desktop) */}
            <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden bg-gray-50 border-t border-gray-200 ${
                    isSearchOpen ? 'max-h-24 opacity-100 py-3' : 'max-h-0 opacity-0'
                } hidden lg:block`}
            >
                <div className="max-w-4xl mx-auto px-8">
                    <input
                        type="search"
                        placeholder="Buscar tazas, camisetas personalizadas, termos..."
                        className="w-full px-5 py-3 border border-pink-300 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-150 text-base shadow-inner"
                    />
                </div>
            </div>

            {/* MENÚ MÓVIL DESPLEGABLE */}
            <nav 
                className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                } absolute w-full bg-white shadow-xl z-40`}
            >
                <div className="p-4 space-y-4">
                    
                    {/* Buscador Móvil (Visible solo cuando el menú está abierto) */}
                    <input
                        type="search"
                        placeholder="Buscar productos..."
                        className="w-full px-4 py-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                    />

                    {/* Enlaces principales */}
                    {navLinks.map((link) => (
                        <Link 
                            key={link.title} 
                            href={link.href} 
                            onClick={() => setIsMenuOpen(false)} // Cierra el menú al navegar
                            className="block px-3 py-3 text-lg font-medium text-gray-800 hover:bg-pink-50 hover:text-pink-600 transition rounded-lg"
                        >
                            {link.title}
                        </Link>
                    ))}

                    <div className="pt-4 border-t border-gray-100">
                        <Link 
                            href="/login" 
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center space-x-2 px-3 py-3 text-lg font-medium text-gray-800 hover:bg-pink-50 hover:text-pink-600 transition rounded-lg"
                        >
                            <User className="w-5 h-5" />
                            <span>Iniciar Sesión / Mi Perfil</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
