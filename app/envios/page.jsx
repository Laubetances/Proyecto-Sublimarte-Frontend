'use client';

export default function EnviosPage() {
  return (
    <>
      <main className="bg-white min-h-screen px-6 py-10 md:px-12 mt-16">
        {/* Contenido principal */}
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold text-pink-700 mb-4 drop-shadow-sm">
            Políticas de Envío
          </h2>
          <p className="text-base text-gray-700 mb-8 max-w-xl mx-auto drop-shadow-sm">
            En SublimArte cada entrega lleva consigo el mismo amor con el que fue creado tu producto. Queremos que el proceso sea claro, confiable y lleno de emoción.
          </p>
        </div>

        {/* Imagen con fondo beige arena */}
        <div className="relative left-1/2 -ml-[50vw] w-screen bg-[#f3e9dc] py-8 mb-10">
          <div className="max-w-sm mx-auto rounded-xl overflow-hidden shadow-md">
            <img
              src="/img/envios.png"
              alt="Caja de envío con productos personalizados"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Sección de detalles */}
        <section className="w-full py-12">
          <div className="space-y-6 text-left max-w-2xl mx-auto px-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-pink-700 mb-2">⏱ Tiempo de producción</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Tu pedido personalizado se produce en 2 a 4 días hábiles. Si tu diseño requiere ajustes especiales, te lo notificaremos antes de iniciar.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-pink-700 mb-2">🚚 Métodos de envío</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Enviamos a todo el país con Vimenpaq, Caribe Express y entregas locales en Bonao y Santo Domingo. Tú eliges cómo recibir tu emoción.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-pink-700 mb-2">📦 Costos y seguimiento</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                El costo varía según tu ubicación y el tamaño del pedido. Te compartimos el número de seguimiento para que puedas rastrear tu entrega.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-pink-700 mb-2">💌 Empaque con emoción</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Cada producto se empaca con detalles que reflejan nuestra esencia. Queremos que abrir tu paquete sea una experiencia llena de alegría.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
