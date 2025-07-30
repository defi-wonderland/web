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
        source: '/handbook',
        destination: 'https://handbook.wonderland.xyz/',
        permanent: true,
      },
    ];
  },
};

export default withVideos(nextConfig);
