/** @type {import('next').NextConfig} */
import withVideos from 'next-videos';

const nextConfig = {
  compiler: {
    styledComponents: { ssr: true },
  },
};

export default withVideos(nextConfig);
