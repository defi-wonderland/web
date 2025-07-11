/** @type {import('next').NextConfig} */
import withVideos from 'next-videos';

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
        source: '/insights/:path*',
        destination: 'https://mirror.xyz/0xD28D1D7A6FDebEF46330210E65a1EF11bAfea11a',
        permanent: true,
      },
    ];
  },
};

export default withVideos(nextConfig);
