/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Keep this if you want static export
  eslint: {
    ignoreDuringBuilds: true, // Good for CI/CD
  },
  images: {
    unoptimized: true, // Required for static exports
    domains: ['your-image-cdn.com'], // Add your image host domains
  },
  // Add these for better static export support
  trailingSlash: true, // Helps with static file routing
  distDir: 'out', // Custom build output folder
  // Enable if using internationalization
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;