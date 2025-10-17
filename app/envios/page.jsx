'use client';

export default function EnviosPage() {
  return (
    <>
      <main className="bg-white min-h-screen px-6 py-12 md:px-20 mt-20">
        {/* Contenido principal */}
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-extrabold text-pink-700 mb-6 drop-shadow-md">
            Políticas de Envío
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto drop-shadow-sm">
            En SublimArte cada entrega lleva consigo el mismo amor con el que fue creado tu producto. Queremos que el proceso sea claro, confiable y lleno de emoción.
          </p>
        </div>

        {/* Imagen con fondo beige arena  */}
        <div className="relative left-1/2 -ml-[50vw] w-screen bg-[#f3e9dc] py-10 mb-12">
          <div className="max-w-xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/img/envios.png"
              alt="Caja de envío con productos personalizados"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

       {/* Sección de detalles  */}
<section className="w-full py-20">
  <div className="space-y-8 text-left max-w-4xl mx-auto px-6">
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-pink-700 mb-2">⏱ Tiempo de producción</h3>
      <p className="text-gray-700 text-base leading-relaxed">
        Tu pedido personalizado se produce en 2 a 4 días hábiles. Si tu diseño requiere ajustes especiales, te lo notificaremos antes de iniciar.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-pink-700 mb-2">🚚 Métodos de envío</h3>
      <p className="text-gray-700 text-base leading-relaxed">
        Enviamos a todo el país con Vimenpaq, Caribe Express y entregas locales en Bonao y Santo Domingo. Tú eliges cómo recibir tu emoción.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-pink-700 mb-2">📦 Costos y seguimiento</h3>
      <p className="text-gray-700 text-base leading-relaxed">
        El costo varía según tu ubicación y el tamaño del pedido. Te compartimos el número de seguimiento para que puedas rastrear tu entrega.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-pink-700 mb-2">💌 Empaque con emoción</h3>
      <p className="text-gray-700 text-base leading-relaxed">
        Cada producto se empaca con detalles que reflejan nuestra esencia. Queremos que abrir tu paquete sea una experiencia llena de alegría.
      </p>
    </div>
  </div>
</section>
</main>

  
    </>
  );
}