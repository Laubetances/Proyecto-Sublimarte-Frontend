import { Inter } from "next/font/google";
import "./globals.css";

// 1. Importamos SOLO el componente de cliente
import RootLayoutClient from './RootLayoutClient'; 

// 2. Definición de la fuente
const inter = Inter({
  subsets: ["latin"],
});

// 3. Metadata (Debe estar aquí, en el Servidor)
export const metadata = {
  title: "SublimArte", 
  description: "Crea y personaliza tus productos de sublimación.",
};

// 4. Componente de Layout de Servidor
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Renderiza el componente de cliente que contiene el Context y el Header */}
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}