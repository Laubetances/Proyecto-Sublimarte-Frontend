'use client'; 
import { CartProvider } from '../context/CartContext'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 

export default function RootLayoutClient({ children }) {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header/> 
        
        {/*  */}
        <main className="flex-grow"> 
          {children}
        </main>
        
        <Footer /> 
      </div>
    </CartProvider>
  );
}