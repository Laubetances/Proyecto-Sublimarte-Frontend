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
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-screen-xl mx-auto px-6 py-16">

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-700 pb-12">

          {/* Columna 1: Branding y Contacto */}
          <div className="flex flex-col items-center space-y-4 text-center">
            <img src="/img/logo-sublimart.png" alt="Logo SublimArte" className="h-25 w-25 mx-10" />

            <div className="text-l space-y-1 pt-2">
              <p>Email: contacto@sublimarte.do</p>
              <p>Teléfono: +1 (809) 123-4567</p>
              <p>Horario: Lun-Vie: 9:00 - 18:00</p>
            </div>

            {/* Redes Sociales */}
            <div className="flex space-x-4 pt-4 justify-center">
              <Link href="#" aria-label="Facebook">
                <img src="/img/facebook.jpg" alt="Facebook" className="h-10 w-10 hover:scale-110 transition" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <img src="/img/instagram.jpg" alt="Instagram" className="h-10 w-10 hover:scale-110 transition" />
              </Link>
              <Link href="#" aria-label="WhatsApp">
                <img src="/img/whatsapp.jpg" alt="WhatsApp" className="h-10 w-10 hover:scale-110 transition" />
              </Link>
            </div>
          </div>

         
          {/* Columna 2: Información Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Información Legal</h4>
            <nav className="flex flex-col space-y-2">
              {legalLinks.map((link) => (
                <Link key={link.title} href={link.href} className="text-sm hover:text-pink-500 transition duration-200">
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Columna 3: Suscripción */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">¡Suscríbete!</h4>
            <p className="text-sm">Recibe ofertas exclusivas y novedades de diseño.</p>

            <form
  className="flex flex-col space-y-2 pt-2"
  onSubmit={(e) => {
    e.preventDefault(); 
    alert('¡Gracias por suscribirte! 🎉');
    
  }}
>
  <input
    type="email"
    placeholder="Correo electrónico"
    className="px-4 py-2 w-full rounded-lg bg-white text-gray-800 text-sm border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
    required
  />
  <button
    type="submit"
    className="px-4 py-2 bg-pink-600 rounded-lg text-white font-semibold hover:bg-pink-700 transition duration-200 text-sm"
  >
    Suscribirme
  </button>
</form>

          </div>
        </div>

        {/* Barra Inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500">
          <p className="order-2 md:order-1 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} SublimArte. Todos los derechos reservados.
          </p>

          <div className="order-1 md:order-2 flex space-x-3 items-center">
            <p className="text-white">Aceptamos:</p>
            <img src="/img/visa.png" alt="Visa" className="h-6 w-auto" />
            <img src="/img/mastercard.png" alt="MasterCard" className="h-6 w-auto" />
            <img src="/img/paypal.png" alt="PayPal" className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
}