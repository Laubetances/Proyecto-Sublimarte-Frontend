import { Inter } from "next/font/google";
import "./globals.css";
import RootLayoutClient from './RootLayoutClient'; 

// Definición de la fuente
const inter = Inter({
  subsets: ["latin"],
});

// Metadata (lado servidor)
export const metadata = {
  title: "SublimArte", 
  description: "Crea y personaliza tus productos de sublimación.",
};

// Layout principal
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Meta viewport para evitar escalado de tipografía en móviles y producción */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
