'use client';
import React, { useState } from 'react';
import Link from 'next/link';


// COMPONENTES AUXILIARES REUTILIZABLES
const InputField = ({ label, id, type = 'text', required = false, placeholder = '' }) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            id={id}
            name={id}
            required={required}
            placeholder={placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
        />
    </div>
);

const CardFields = () => (
    <>
        <InputField label="Nombre en la Tarjeta" id="cardName" required />
        <InputField label="Número de Tarjeta" id="cardNumber" type="tel" required placeholder="XXXX XXXX XXXX XXXX" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField label="Fecha de Expiración (MM/AA)" id="expiry" required placeholder="MM/AA" />
            <InputField label="CVV" id="cvv" type="tel" required placeholder="123" />
        </div>
    </>
);

// COMPONENTE PRINCIPAL: CheckoutPage
export default function CheckoutPage() {
    const [step, setStep] = useState(1); // 1: Info, 2: Envío, 3: Pago
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card'); // Estado para el método de pago

    // Estado simulado de la orden (Basado en el Carrito: 1 Taza + 2 Camisetas)
    const orderItems = [
        { id: 1, name: 'Taza Personalizada', price: 350.00, quantity: 1 },
        { id: 2, name: 'Camiseta Elegante', price: 600.00, quantity: 2 },
    ];

    // Cálculos de la orden
    const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0); // 350 + 1200 = 1550
    const shippingCost = 150.00; 
    const taxRate = 0.18; // 18% ITBIS (Impuesto local)
    const tax = subtotal * taxRate;
    const total = subtotal + shippingCost + tax;

    // Navegación entre pasos
    const handleNext = (e) => {
        e.preventDefault();
        if (step < 3) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };
    
    // Función de Pago Final
    const handlePlaceOrder = (e) => {
        e.preventDefault();
        alert(`¡Pedido de RD$${total.toFixed(2)} realizado con éxito usando ${selectedPaymentMethod.toUpperCase()}!`);
        // Lógica de integración de pago real...
    };

    // Componente para instrucciones de Transferencia (Necesita total)
    const TransferInstructions = () => (
        <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded-md mt-4">
            <p className="font-bold mb-2">Instrucciones para Transferencia Bancaria</p>
            <p className="text-sm">
                Por favor, realiza una transferencia por el total **RD${total.toFixed(2)}** a la siguiente cuenta.
            </p>
            <ul className="text-xs list-disc list-inside mt-2">
                <li>Banco: Banco BHD León</li>
                <li>Número de Cuenta: **123-456789-0**</li>
                <li>RNC/Cédula: 131-00000-5</li>
                <li>Beneficiario: SublimArte, SRL</li>
            </ul>
            <p className="text-sm mt-3 font-semibold text-red-600">
                Importante: Envía el comprobante de pago por WhatsApp o email después de completar el pedido.
            </p>
        </div>
    );


    // Componente de la columna de Resumen de Orden (derecha)
    const OrderSummary = () => (
        <div className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-pink-600">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Tu Pedido</h2>

            {/* Lista de Artículos */}
            <ul className="space-y-3 mb-6 border-b pb-4">
                {orderItems.map(item => (
                    <li key={item.id} className="flex justify-between text-sm text-gray-600">
                        <span>{item.name} (x{item.quantity})</span>
                        <span>RD${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                ))}
            </ul>

            {/* Desglose de Costos */}
            <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>RD${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Envío Estimado:</span>
                    <span>RD${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Impuestos (ITBIS 18%):</span>
                    <span>RD${tax.toFixed(2)}</span>
                </div>
            </div>

            {/* Total Final */}
            <div className="flex justify-between text-2xl font-extrabold text-gray-900 mt-5 pt-3 border-t-2 border-pink-100">
                <span>Total a Pagar:</span>
                <span>RD${total.toFixed(2)}</span>
            </div>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
                Al hacer clic en "Finalizar Pedido", aceptas nuestros Términos y Condiciones.
            </p>
        </div>
    );
    
    const Step1 = () => (
        <form onSubmit={handleNext}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">1. Información de Contacto</h2>
            <InputField label="Correo Electrónico" id="email" type="email" required placeholder="tu@correo.com" />
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3 mt-8">2. Dirección de Envío</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="Nombre" id="firstName" required />
                <InputField label="Apellido" id="lastName" required />
            </div>
            <InputField label="Dirección (Calle y Número)" id="address" required />
            <InputField label="Apartamento, Suite, etc. (Opcional)" id="apartment" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <InputField label="Ciudad" id="city" required />
                <InputField label="Provincia" id="province" required />
                <InputField label="Código Postal" id="zip" required />
            </div>

            <div className="flex justify-between mt-8">
                <Link href="/carrito" className="text-pink-600 hover:text-pink-700 font-medium">
                    &larr; Volver al Carrito
                </Link>
                <button 
                    type="submit" 
                    className="bg-pink-600 text-white font-bold px-6 py-2 rounded-md hover:bg-pink-700 transition duration-150 shadow-md"
                >
                    Continuar al Envío &rarr;
                </button>
            </div>
        </form>
    );

    const Step2 = () => (
        <form onSubmit={handleNext}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">3. Método de Envío</h2>
            <div className="space-y-4">
                <div className="flex items-start p-4 border border-pink-300 bg-pink-50 rounded-lg">
                    <input type="radio" name="shipping" id="standard" value="standard" defaultChecked className="mt-1 h-4 w-4 text-pink-600 border-gray-300 focus:ring-pink-500" />
                    <label htmlFor="standard" className="ml-3 block">
                        <span className="text-sm font-medium text-gray-900">Envío Estándar (3-5 días hábiles)</span>
                        <span className="block text-sm text-gray-500">RD${shippingCost.toFixed(2)}</span>
                    </label>
                </div>
                
                <div className="flex items-start p-4 border border-gray-200 rounded-lg">
                    <input type="radio" name="shipping" id="pickup" value="pickup" className="mt-1 h-4 w-4 text-pink-600 border-gray-300 focus:ring-pink-500" />
                    <label htmlFor="pickup" className="ml-3 block">
                        <span className="text-sm font-medium text-gray-900">Retiro en Tienda (Gratis)</span>
                        <span className="block text-sm text-gray-500">Disponible 24 horas después de la orden.</span>
                    </label>
                </div>
            </div>

            <div className="flex justify-between mt-8">
                <button type="button" onClick={handleBack} className="text-gray-600 hover:text-pink-600 font-medium">
                    &larr; Volver a Información
                </button>
                <button 
                    type="submit" 
                    className="bg-pink-600 text-white font-bold px-6 py-2 rounded-md hover:bg-pink-700 transition duration-150 shadow-md"
                >
                    Continuar al Pago &rarr;
                </button>
            </div>
        </form>
    );

    const Step3 = () => (
        <form onSubmit={handlePlaceOrder}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">4. Información de Pago</h2>
            
            {/* Opciones de Pago como Radios de Selección */}
            <div className="space-y-4 mb-6">
                
                {/* OPCIÓN 1: Tarjeta de Crédito/Débito */}
                <div 
                    className={`p-4 rounded-lg cursor-pointer transition duration-150 ${
                        selectedPaymentMethod === 'card' ? 'bg-pink-50 border-2 border-pink-400 shadow-inner' : 'bg-white border border-gray-200 hover:border-pink-300'
                    }`}
                    onClick={() => setSelectedPaymentMethod('card')}
                >
                    <div className="flex items-center">
                        <input 
                            type="radio" 
                            name="payment" 
                            id="payment-card" 
                            value="card" 
                            checked={selectedPaymentMethod === 'card'} 
                            onChange={() => setSelectedPaymentMethod('card')}
                            className="h-4 w-4 text-pink-600 border-gray-300 focus:ring-pink-500"
                        />
                        <label htmlFor="payment-card" className="ml-3 block text-sm font-medium text-gray-900">
                            Tarjeta de Crédito / Débito (Visa, Mastercard)
                        </label>
                    </div>
                </div>

                {/* OPCIÓN 2: PayPal */}
                <div 
                    className={`p-4 rounded-lg cursor-pointer transition duration-150 ${
                        selectedPaymentMethod === 'paypal' ? 'bg-pink-50 border-2 border-pink-400 shadow-inner' : 'bg-white border border-gray-200 hover:border-pink-300'
                    }`}
                    onClick={() => setSelectedPaymentMethod('paypal')}
                >
                    <div className="flex items-center">
                        <input 
                            type="radio" 
                            name="payment" 
                            id="payment-paypal" 
                            value="paypal" 
                            checked={selectedPaymentMethod === 'paypal'} 
                            onChange={() => setSelectedPaymentMethod('paypal')}
                            className="h-4 w-4 text-pink-600 border-gray-300 focus:ring-pink-500"
                        />
                        <label htmlFor="payment-paypal" className="ml-3 block text-sm font-medium text-gray-900">
                            PayPal (Serás redirigido para completar el pago)
                        </label>
                    </div>
                </div>

                {/* OPCIÓN 3: Transferencia Bancaria */}
                <div 
                    className={`p-4 rounded-lg cursor-pointer transition duration-150 ${
                        selectedPaymentMethod === 'transfer' ? 'bg-pink-50 border-2 border-pink-400 shadow-inner' : 'bg-white border border-gray-200 hover:border-pink-300'
                    }`}
                    onClick={() => setSelectedPaymentMethod('transfer')}
                >
                    <div className="flex items-center">
                        <input 
                            type="radio" 
                            name="payment" 
                            id="payment-transfer" 
                            value="transfer" 
                            checked={selectedPaymentMethod === 'transfer'} 
                            onChange={() => setSelectedPaymentMethod('transfer')}
                            className="h-4 w-4 text-pink-600 border-gray-300 focus:ring-pink-500"
                        />
                        <label htmlFor="payment-transfer" className="ml-3 block text-sm font-medium text-gray-900">
                            Transferencia Bancaria (Manual)
                        </label>
                    </div>
                </div>
            </div>

            {/* CONTENIDO CONDICIONAL BASADO EN LA SELECCIÓN */}
            <div className="mt-6">
                {selectedPaymentMethod === 'card' && <CardFields />}
                {selectedPaymentMethod === 'transfer' && <TransferInstructions />}
                {selectedPaymentMethod === 'paypal' && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-md">
                        <p className="font-semibold">Serás redirigido a la plataforma de PayPal al hacer clic en "Finalizar Pedido".</p>
                    </div>
                )}
            </div>
            
            {/* BOTONES DE NAVEGACIÓN Y FINALIZAR */}
            <div className="flex justify-between mt-8">
                <button type="button" onClick={handleBack} className="text-gray-600 hover:text-pink-600 font-medium">
                    &larr; Volver al Envío
                </button>
                
                <button 
                    type="submit" 
                    className="bg-yellow-500 text-white font-bold text-lg px-8 py-3 rounded-md hover:bg-yellow-600 transition duration-200 shadow-xl uppercase tracking-wider"
                >
                    {selectedPaymentMethod === 'transfer' ? 'Finalizar Pedido y Recibir Instrucciones' : 'Pagar y Finalizar Pedido'}
                </button>
            </div>
        </form>
    );

    // Renderizado principal
    const renderStep = () => {
        switch (step) {
            case 1: return <Step1 />;
            case 2: return <Step2 />;
            case 3: return <Step3 />;
            default: return <Step1 />;
        }
    };
    
    const steps = [
        { name: 'Información', number: 1 },
        { name: 'Envío', number: 2 },
        { name: 'Pago', number: 3 },
    ];

    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-10">Checkout</h1>
                
                {/* Barra de Progreso */}
                <div className="mb-10 flex justify-between relative max-w-xl mx-auto">
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 mx-4"></div>
                    {steps.map((s) => (
                        <div key={s.number} className="relative z-10 text-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white mx-auto mb-2 ${
                                step >= s.number ? 'bg-pink-600' : 'bg-gray-400'
                            }`}>
                                {s.number}
                            </div>
                            <span className={`text-xs ${step >= s.number ? 'text-pink-600 font-semibold' : 'text-gray-500'}`}>
                                {s.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Contenido de Dos Columnas */}
                <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                    
                    {/* COLUMNA IZQUIERDA: FORMULARIO */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
                        {renderStep()}
                    </div>

                    {/* COLUMNA DERECHA: RESUMEN DE LA ORDEN */}
                    <div className="lg:col-span-1 mt-8 lg:mt-0">
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </div>
    );
}