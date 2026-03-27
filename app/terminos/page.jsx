'use client';

export default function TerminosPage() {
  return (
    <>
      <main className="bg-white min-h-screen px-6 py-10 md:px-12 mt-16">
        
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold text-pink-700 mb-4 drop-shadow-sm">
            Términos y Condiciones
          </h2>
          <p className="text-base text-gray-700 mb-8 max-w-xl mx-auto drop-shadow-sm">
            Al realizar una compra en SublimArte, aceptas nuestras condiciones de uso. Queremos que todo sea claro, justo y lleno de confianza.
          </p>
        </div>

        {/* Imagen con fondo beige */}
        <div className="relative left-1/2 -ml-[50vw] w-screen bg-[#f5f0e6] py-8 mb-10">
          <div className="max-w-sm mx-auto rounded-xl overflow-hidden shadow-md">
            <img
              src="/img/terminos.png"
              alt="Contrato simbólico sobre fondo cálido"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Sección de términos */}
        <section className="w-full py-12">
          <div className="space-y-6 text-left max-w-2xl mx-auto px-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-pink-700 mb-2">📝 Uso del sitio</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Este sitio está destinado a ofrecer productos personalizados. El contenido no puede ser copiado ni distribuido sin autorización.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-pink-700 mb-2">🎨 Propiedad intelectual</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Los diseños creados por SublimArte son propiedad de la marca. Los diseños enviados por el cliente se usan exclusivamente para su pedido.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-pink-700 mb-2">💳 Pagos y precios</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Todos los precios están en pesos dominicanos. El pago debe realizarse antes de iniciar la producción. Aceptamos múltiples métodos de pago.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
