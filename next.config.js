/** @type {import('next').NextConfig} */
import withVideos from 'next-videos';

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};

export default withVideos(nextConfig);
