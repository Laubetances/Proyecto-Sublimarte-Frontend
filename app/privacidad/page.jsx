'use client';

export default function PrivacidadPage() {
  return (
    <>
      <main className="bg-white min-h-screen px-6 py-12 md:px-12 mt-16">
        {/* Contenido principal */}
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold text-pink-700 mb-4 drop-shadow-sm">
            Política de Privacidad
          </h2>
          <p className="text-base text-gray-700 mb-8 max-w-xl mx-auto drop-shadow-sm">
            En SublimArte valoramos tu confianza. Por eso, protegemos tu información con responsabilidad, transparencia y mucho cuidado. Aquí te explicamos cómo lo hacemos.
          </p>
        </div>

        {/* Imagen con fondo azul claro */}
        <div className="relative left-1/2 -ml-[50vw] w-screen bg-[#e0f2ff] py-8 mb-10">
          <div className="max-w-sm mx-auto rounded-xl overflow-hidden shadow-md">
            <img
              src="/img/privacidad.png"
              alt="Candado digital sobre fondo cálido"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Sección de políticas */}
        <section className="w-full py-12">
          <div className="space-y-6 text-left max-w-2xl mx-auto px-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">🔐 Información que recopilamos</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Recopilamos tu nombre, correo, dirección y detalles del pedido para poder procesarlo correctamente. Nunca pedimos más de lo necesario.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">📧 Uso de tus datos</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Usamos tu información solo para gestionar tus pedidos, enviarte actualizaciones y mejorar tu experiencia. No compartimos tus datos con terceros sin tu consentimiento.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">🛡️ Seguridad</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Protegemos tus datos con medidas técnicas y humanas. Nuestro sitio está cifrado y nuestros procesos internos son confidenciales.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">📄 Tus derechos</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Puedes solicitar acceso, corrección o eliminación de tus datos en cualquier momento. Solo escríbenos y lo gestionamos con cariño y rapidez.
              </p>
            </div>
          </div>
        </section>
      </main>   
    </>
  );
}
