/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'links.papareact.com',
      'avatars.githubusercontent.com',
      'cdn.sanity.io',
    ],
  },
};
