'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      router.push('/productos');
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          setError('Correo no registrado.');
          break;
        case 'auth/wrong-password':
          setError('Contraseña incorrecta.');
          break;
        case 'auth/invalid-email':
          setError('Formato de correo inválido.');
          break;
        case 'auth/network-request-failed':
          setError('Error de conexión.');
          break;
        default:
          setError('Correo o contraseña incorrectos.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-gray-100 px-3">
      <div className="w-full max-w-sm bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-base font-bold text-pink-600 text-center mb-4">Acceder a SublimArte</h1>

        <form onSubmit={handleLogin} className="space-y-3 text-xs">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-pink-500"
          />

          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-pink-500"
          />

          <label className="flex items-center text-[11px] text-gray-600">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="mr-1 h-3 w-3"
            />
            Mostrar contraseña
          </label>

          {error && <p className="text-red-600 text-[11px] text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-600 text-white py-2 text-xs rounded hover:bg-pink-700 transition"
          >
            {loading ? 'Verificando...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="mt-3 text-center text-[11px] text-gray-600 space-y-1">
          <a href="/registro" className="text-pink-600 hover:underline">Crear cuenta</a><br />
          <a href="/recuperar" className="text-pink-600 hover:underline">Olvidé mi contraseña</a>
        </div>
      </div>
    </div>
  );
}
