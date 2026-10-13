/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
  // The old section pages now live as case files on the homepage.
  async redirects() {
    return [
      ['/about', 'about'],
      ['/my-work', 'work'],
      ['/project', 'projects'],
      ['/stories', 'stories'],
      ['/dreams', 'dreams'],
    ].map(([source, file]) => ({ source, destination: `/?file=${file}`, permanent: false }));
  }
};

export default nextConfig;



