/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/repo-name' : '',
    reactStrictMode: true,
    sassOptions: {
        includePaths: [require('path').join(__dirname, 'css')], // Changed from 'styles' to 'css'
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'media.dev.to',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'media2.dev.to',
                pathname: '**',
            },
        ],
    },
    env: {
        NEXT_PUBLIC_FORMSPREE_URL: process.env.NEXT_PUBLIC_FORMSPREE_URL,
    },
    experimental: {
        optimizePackageImports: ['react-toastify'],
    }
}

module.exports = nextConfig
