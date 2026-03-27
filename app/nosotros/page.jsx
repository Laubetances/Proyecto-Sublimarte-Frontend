'use client';

export default function NosotrosPage() {
  return (
    <>
      <main className="bg-white min-h-screen px-4 py-6 md:px-10">
        
        {/* 🎨 Sección de presentación */}
        <section className="relative w-full py-8 bg-gradient-to-r from-pink-100 via-white to-pink-100">
          <div className="max-w-2xl mx-auto text-center px-3">
            <h2 className="text-lg font-bold text-pink-700 mb-4">
              ¿Quiénes somos?
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              En SublimArte creemos que cada diseño cuenta una historia. Creamos productos que conectan con emociones, momentos y personas.
            </p>
            <div className="max-w-xs mx-auto rounded-lg overflow-hidden shadow-sm">
              <img
                src="/img/articulos.png"
                alt="Ilustración emocional de SublimArte"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* 🧵 Sección Nosotros */}
        <section className="bg-white py-8 px-4 md:px-10">
          <div className="max-w-2xl mx-auto text-justify">
            <h2 className="text-base font-bold text-pink-600 mb-3 text-center">Nosotros</h2>
            <p className="text-sm text-gray-700 mb-3">
              SublimArte nace del deseo de transformar ideas en objetos que emocionan. Somos una marca dominicana con raíces en Bonao, dedicada a la sublimación personalizada y al diseño emocional.
            </p>
            <p className="text-sm text-gray-700">
              Nos apasiona crear piezas únicas que conecten con personas reales: emprendedores, soñadores, familias, amigos. Desde una taza con tu frase favorita hasta un regalo que celebra momentos especiales.
            </p>
          </div>
        </section>

        {/* 🎯 Misión, Visión y Valores */}
        <section className="bg-white py-8 px-4 md:px-10">
          <div className="max-w-2xl mx-auto text-justify">
            <div className="mb-6">
              <h2 className="text-base font-bold text-pink-600 mb-2 text-center">Nuestra misión</h2>
              <p className="text-sm text-gray-700">
                Empoderar a las personas a través del diseño personalizado, creando productos que reflejen su identidad y emociones.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-base font-bold text-pink-600 mb-2 text-center">Nuestra visión</h2>
              <p className="text-sm text-gray-700">
                Ser la marca líder en sublimación emocional en República Dominicana, reconocida por su autenticidad y diseño innovador.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-pink-600 mb-4 text-center">Nuestros valores</h2>
              <div className="space-y-4">
                <div className="bg-pink-50 p-3 rounded-md shadow-sm">
                  <h3 className="text-sm font-semibold text-pink-700 mb-1 text-center">Creatividad</h3>
                  <p className="text-xs text-gray-700">
                    Diseñamos con alma, buscando siempre lo auténtico y lo emocional.
                  </p>
                </div>
                <div className="bg-pink-50 p-3 rounded-md shadow-sm">
                  <h3 className="text-sm font-semibold text-pink-700 mb-1 text-center">Calidez</h3>
                  <p className="text-xs text-gray-700">
                    Cada producto está hecho con cariño, pensando en quien lo recibe.
                  </p>
                </div>
                <div className="bg-pink-50 p-3 rounded-md shadow-sm">
                  <h3 className="text-sm font-semibold text-pink-700 mb-1 text-center">Innovación</h3>
                  <p className="text-xs text-gray-700">
                    Nos adaptamos y evolucionamos con cada proyecto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 💬 Frase final */}
        <section className="text-center py-4">
          <p className="text-sm italic text-pink-700">
            "No vendemos productos, creamos recuerdos que se imprimen en el corazón."
          </p>
        </section>
      </main>
    </>
  );
}
