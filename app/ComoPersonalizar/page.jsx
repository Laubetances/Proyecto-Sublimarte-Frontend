'use client';

export default function ComoPersonalizarSection() {
  return (
    <>
      <main className="bg-white min-h-screen px-6 py-12 md:px-20">
        {/* Sección principal o */}
        <section className="w-full py-20">
          <div className="max-w-4xl mx-auto text-center px-40">
            <h2 className="text-5xl font-extrabold text-pink-700 mb-10 drop-shadow-md">
              ¿Cómo personalizar tu producto?
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto drop-shadow-sm">
              Personalizar en SublimArte es fácil, rápido y lleno de emoción. Sigue estos pasos para crear algo único y significativo.
            </p>
          </div>

          {/* Imagen con fondo beige arena  */}
          <div className="w-full bg-[#f5f0e6] py-10 mb-12">
            <div className="max-w-xl mx-auto rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/img/personaliza.png"
                alt="Mesa creativa con productos personalizados"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
        
       {/* Sección de pasos */}
<section className="w-full py-20">
  <div className="space-y-8 text-left max-w-4xl mx-auto px-6">
    <div className="bg-pink-50 p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-pink-700 mb-2">1. Elige tu producto</h3>
      <p className="text-gray-700 text-base leading-relaxed">
        Selecciona entre tazas, camisetas, llaveros, cojines y más. Cada uno está listo para contar tu historia.
      </p>
    </div>

    <div className="bg-pink-50 p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-pink-700 mb-2">2. Sube tu diseño o idea</h3>
      <p className="text-gray-700 text-base leading-relaxed">
        Puedes subir una imagen, escribir una frase especial o describir lo que quieres. ¡Nosotros lo convertimos en arte!
      </p>
    </div>

    <div className="bg-pink-50 p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-pink-700 mb-2">3. Revisa y confirma</h3>
      <p className="text-gray-700 text-base leading-relaxed">
        Te mostraremos una vista previa para que confirmes cada detalle. Queremos que te enamores del resultado.
      </p>
    </div>

    <div className="bg-pink-50 p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-pink-700 mb-2">4. Recíbelo con amor</h3>
      <p className="text-gray-700 text-base leading-relaxed">
        Una vez confirmado, lo producimos y lo enviamos directo a ti. Cada entrega lleva un pedacito de emoción.
      </p>
    </div>

    {/* Botón */}
    <div className="mt-12 text-center">
      <a
        href="/personalizarproducto"
        className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
      >
        ¡Quiero personalizar ahora!
      </a>
    </div>
  </div>
</section>
</main>
      
    </>
  );
}