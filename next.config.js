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
        destination: 'https://apply.defi.sucks/',
        permanent: true,
      },
    ];
  },
};

export default withVideos(nextConfig);
