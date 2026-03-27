'use client';

export default function ComoPersonalizarSection() {
  return (
    <>
      <main className="bg-white min-h-screen px-4 py-6 md:px-10">
        
        {/* Sección principal */}
        <section className="w-full py-8">
          <div className="max-w-2xl mx-auto text-center px-6">
            <h2 className="text-base font-bold text-pink-700 mb-4">
              ¿Cómo personalizar tu producto?
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              Personalizar en SublimArte es fácil, rápido y lleno de emoción. Sigue estos pasos para crear algo único.
            </p>
            <div className="max-w-xs mx-auto rounded-lg overflow-hidden shadow-sm">
              <img
                src="/img/personaliza.png"
                alt="Mesa creativa con productos personalizados"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>
        
        {/* Sección de pasos */}
        <section className="w-full py-8">
          <div className="space-y-4 text-left max-w-2xl mx-auto px-3">
            
            <div className="bg-pink-50 p-3 rounded-md shadow-sm">
              <h3 className="text-sm font-semibold text-pink-700 mb-1">1. Elige tu producto</h3>
              <p className="text-xs text-gray-700">
                Selecciona entre tazas, camisetas, llaveros y más.
              </p>
            </div>

            <div className="bg-pink-50 p-3 rounded-md shadow-sm">
              <h3 className="text-sm font-semibold text-pink-700 mb-1">2. Sube tu diseño o idea</h3>
              <p className="text-xs text-gray-700">
                Puedes subir una imagen o escribir una frase especial.
              </p>
            </div>

            <div className="bg-pink-50 p-3 rounded-md shadow-sm">
              <h3 className="text-sm font-semibold text-pink-700 mb-1">3. Revisa y confirma</h3>
              <p className="text-xs text-gray-700">
                Te mostraremos una vista previa para que confirmes cada detalle.
              </p>
            </div>

            <div className="bg-pink-50 p-3 rounded-md shadow-sm">
              <h3 className="text-sm font-semibold text-pink-700 mb-1">4. Recíbelo con amor</h3>
              <p className="text-xs text-gray-700">
                Una vez confirmado, lo producimos y lo enviamos directo a ti.
              </p>
            </div>

            {/* Botón */}
            <div className="mt-6 text-center">
              <a
                href="/personalizarproducto"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-full shadow-sm transition text-xs uppercase tracking-wide"
              >
                ¡Personalizar ahora!
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
