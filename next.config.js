/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            { source: '/shop', destination: '/productos', permanent: true },
            { source: '/shop/:path*', destination: '/productos', permanent: true },
            { source: '/product', destination: '/productos', permanent: true },
            { source: '/product/:path*', destination: '/productos', permanent: true },
            { source: '/cart', destination: '/carrito', permanent: true },
            { source: '/search-result', destination: '/buscar', permanent: true },
            { source: '/checkout2', destination: '/checkout', permanent: true },
            { source: '/homepages', destination: '/', permanent: true },
            { source: '/homepages/:path*', destination: '/', permanent: true },
            { source: '/blog', destination: '/', permanent: true },
            { source: '/blog/:path*', destination: '/', permanent: true },
            { source: '/pages', destination: '/', permanent: true },
            { source: '/pages/:path*', destination: '/', permanent: true },
            { source: '/wishlist', destination: '/', permanent: true },
            { source: '/compare', destination: '/', permanent: true },
            { source: '/login', destination: '/', permanent: true },
            { source: '/register', destination: '/', permanent: true },
            { source: '/forgot-password', destination: '/', permanent: true },
            { source: '/my-account', destination: '/', permanent: true },
            { source: '/order-tracking', destination: '/', permanent: true },
        ]
    },
}

module.exports = nextConfig
