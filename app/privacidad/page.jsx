'use client';

export default function PrivacidadPage() {
  return (
    <>
      <main className="bg-white min-h-screen px-6 py-12 md:px-20 mt-20">
        {/* Contenido principal */}
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-extrabold text-pink-700 mb-6 drop-shadow-md">
            Política de Privacidad
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto drop-shadow-sm">
            En SublimArte valoramos tu confianza. Por eso, protegemos tu información con responsabilidad, transparencia y mucho cuidado. Aquí te explicamos cómo lo hacemos.
          </p>
        </div>

        {/* Imagen con fondo beige arena */}
          <div className="relative left-1/2 -ml-[50vw] w-screen bg-[#e0f2ff] py-10 mb-12">
          <div className="max-w-xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/img/privacidad.png"
              alt="Candado digital sobre fondo cálido"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Sección de políticas */}
        <section className="w-full py-20">
          <div className="space-y-8 text-left max-w-4xl mx-auto px-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">🔐 Información que recopilamos</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Recopilamos tu nombre, correo, dirección y detalles del pedido para poder procesarlo correctamente. Nunca pedimos más de lo necesario.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">📧 Uso de tus datos</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Usamos tu información solo para gestionar tus pedidos, enviarte actualizaciones y mejorar tu experiencia. No compartimos tus datos con terceros sin tu consentimiento.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">🛡️ Seguridad</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Protegemos tus datos con medidas técnicas y humanas. Nuestro sitio está cifrado y nuestros procesos internos son confidenciales.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">📄 Tus derechos</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Puedes solicitar acceso, corrección o eliminación de tus datos en cualquier momento. Solo escríbenos y lo gestionamos con cariño y rapidez.
              </p>
            </div>
          </div>

        </section>
      </main>   
    </>
  );
}