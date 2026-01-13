/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/join',
        destination: 'https://apply.wonderland.xyz/',
        permanent: true,
      },
      {
        source: '/handbook',
        destination: 'https://handbook.wonderland.xyz/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
