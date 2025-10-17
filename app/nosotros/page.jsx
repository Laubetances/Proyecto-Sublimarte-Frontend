'use client';

export default function NosotrosPage() {
  return (
    <>
      {/* 🌐 Contenido principal */}
      <main className="bg-white min-h-screen px-6 py-12 md:px-20">
        {/* 🎨 Sección de presentación */}
        <section className="relative w-full py-20 bg-gradient-to-r from-pink-100 via-white to-pink-100">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-5xl font-extrabold text-pink-700 mb-10 drop-shadow-md">
              ¿Quiénes somos?
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto drop-shadow-sm">
              En SublimArte creemos que cada diseño cuenta una historia. Creamos productos que conectan con emociones, momentos y personas.
            </p>
            <div className="max-w-xl mx-auto rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/img/articulos.png"
                alt="Ilustración emocional de SublimArte"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* 🧵 Sección Nosotros */}
        <section className="bg-white py-20 px-6 md:px-20">
          <div className="max-w-4xl mx-auto text-justify">
            <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Nosotros</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              SublimArte nace del deseo de transformar ideas en objetos que emocionan. Somos una marca dominicana con raíces en Bonao, dedicada a la sublimación personalizada y al diseño emocional. Creemos que cada producto puede contar una historia, transmitir cariño y dejar huella.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Nos apasiona crear piezas únicas que conecten con personas reales: emprendedores, soñadores, familias, amigos. Desde una taza con tu frase favorita hasta un regalo que celebra momentos especiales, nuestro propósito es ayudarte a expresarte con autenticidad.
            </p>
          </div>
        </section>

        {/* 🎯 Misión, Visión y Valores */}
        <section className="bg-white py-20 px-6 md:px-20">
          <div className="max-w-4xl mx-auto text-justify">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-pink-600 mb-4 text-center">Nuestra misión</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Empoderar a las personas a través del diseño personalizado, creando productos que reflejen su identidad, emociones y creatividad. Queremos que cada taza, camiseta o llavero sea una extensión de lo que sienten y sueñan.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-pink-600 mb-4 text-center">Nuestra visión</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ser la marca líder en sublimación emocional en República Dominicana, reconocida por su autenticidad, calidez y diseño innovador. Aspiramos a inspirar a emprendedores, artistas y soñadores a través de productos que conectan con el corazón.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center">Nuestros valores</h2>
              <div className="space-y-8">
                <div className="bg-pink-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-pink-700 mb-2 text-center">Creatividad</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Diseñamos con alma, buscando siempre lo auténtico y lo emocional. Cada idea se convierte en una pieza única.
                  </p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-pink-700 mb-2 text-center">Calidez</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Cada producto está hecho con cariño, pensando en quien lo recibe. Queremos que cada entrega sea una experiencia.
                  </p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-pink-700 mb-2 text-center">Innovación</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Nos adaptamos, exploramos y evolucionamos con cada proyecto. Siempre buscamos nuevas formas de sorprender.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 💬 Frase final */}
        <section className="text-center">
          <p className="text-xl italic text-pink-700">
            "No vendemos productos, creamos recuerdos que se imprimen en el corazón."
          </p>
        </section>
      </main>
    </>
  );
}