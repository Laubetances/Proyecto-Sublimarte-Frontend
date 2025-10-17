/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... cualquier otra configuración que tengas aquí
    images: {
        // 🚩 Agrega la configuración del dominio de Flask
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '5000',
                pathname: '/uploads/**',
            },
        ],
        // Si usas Next.js 13 o inferior, tal vez necesites la propiedad 'domains' en su lugar:
        // domains: ['localhost'], 
    },
};

// 🚩 CLAVE: Usamos 'export default' para la sintaxis moderna (ES Modules)
export default nextConfig; 
;
