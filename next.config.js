/** @type {import('next').NextConfig} */
import withVideos from 'next-videos';

const nextConfig = {
  distDir: './dist',
  swcMinify: true,
  compiler: {
    styledComponents: { ssr: true },
  },
};

export default withVideos(nextConfig);
