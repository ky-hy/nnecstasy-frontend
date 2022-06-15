/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
  images: {
    domains: ['ei.phncdn.com', 'di.phncdn.com'],
  },
};

module.exports = nextConfig;
