'use client';
import { useSearchParams } from 'next/navigation';
import ProductosCard from "@/components/ProductosDestacados";

export default function BuscarPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const productos = [
    { id: 1, nombre: 'Taza personalizada' },
    { id: 2, nombre: 'Camiseta con diseño' },
    { id: 3, nombre: 'Llavero grabado' },
  ];

  const resultados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(query)
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Resultados para: {query}</h1>
      {resultados.length > 0 ? (
        <ul className="space-y-2">
          {resultados.map((p) => (
            <li key={p.id} className="bg-white p-4 rounded shadow">
              {p.nombre}
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
}