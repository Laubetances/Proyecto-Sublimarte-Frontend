'use client';
import Link from 'next/link';

// Enlaces del footer
const legalLinks = [
  { title: "Términos y Condiciones", href: "/terminos" },
  { title: "Política de Privacidad", href: "/privacidad" },
  { title: "Política de Devolución", href: "/devolucion" },
  { title: "Política de Envios", href: "/envios" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-8">

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-b border-gray-700 pb-6">

          {/* Columna 1: Branding y Contacto */}
          <div className="flex flex-col items-center space-y-2 text-center">
            <img src="/img/logo-sublimart.png" alt="Logo SublimArte" className="h-16 w-16 mx-auto" />

            <div className="space-y-1">
              <p>Email: contacto@sublimarte.do</p>
              <p>Tel: +1 (809) 123-4567</p>
              <p>Horario: Lun-Vie 9:00 - 18:00</p>
            </div>

            {/* Redes Sociales */}
            <div className="flex space-x-2 pt-2 justify-center">
              <Link href="#" aria-label="Facebook">
                <img src="/img/facebook.jpg" alt="Facebook" className="h-6 w-6 hover:scale-110 transition" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <img src="/img/instagram.jpg" alt="Instagram" className="h-6 w-6 hover:scale-110 transition" />
              </Link>
              <Link href="#" aria-label="WhatsApp">
                <img src="/img/whatsapp.jpg" alt="WhatsApp" className="h-6 w-6 hover:scale-110 transition" />
              </Link>
            </div>
          </div>

          {/* Columna 2: Información Legal */}
          <div>
            <h4 className="text-base font-semibold text-white mb-2">Información Legal</h4>
            <nav className="flex flex-col space-y-1">
              {legalLinks.map((link) => (
                <Link key={link.title} href={link.href} className="hover:text-pink-500 transition duration-200">
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Columna 3: Suscripción */}
          <div className="space-y-2">
            <h4 className="text-base font-semibold text-white">¡Suscríbete!</h4>
            <p>Recibe ofertas exclusivas y novedades.</p>

            <form
              className="flex flex-col space-y-2"
              onSubmit={(e) => {
                e.preventDefault(); 
                alert('¡Gracias por suscribirte! 🎉');
              }}
            >
              <input
                type="email"
                placeholder="Correo electrónico"
                className="px-3 py-2 rounded bg-white text-gray-800 border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
              <button
                type="submit"
                className="px-3 py-2 bg-pink-600 rounded text-white font-semibold hover:bg-pink-700 transition duration-200"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 text-xs text-gray-500">
          <p className="order-2 md:order-1 mt-2 md:mt-0">
            &copy; {new Date().getFullYear()} SublimArte. Todos los derechos reservados.
          </p>

          <div className="order-1 md:order-2 flex space-x-2 items-center">
            <p className="text-white">Aceptamos:</p>
            <img src="/img/visa.png" alt="Visa" className="h-4 w-auto" />
            <img src="/img/mastercard.png" alt="MasterCard" className="h-4 w-auto" />
            <img src="/img/paypal.png" alt="PayPal" className="h-4 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
}
