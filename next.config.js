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
        destination: 'https://docs.google.com/forms/d/1n70jsL4sFkOwPNBTdciPqlWF2RirgQwejjztpS4-2L8/viewform',
        permanent: true,
      },
    ];
  },
};

export default withVideos(nextConfig);
