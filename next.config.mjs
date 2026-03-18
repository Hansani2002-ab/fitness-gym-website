/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v2.exercisedb.io', // ExerciseDB images එන්නේ මේ domain එකෙන්
      },
      {
        protocol: 'https',
        hostname: '**.amazonaws.com', // සමහර වෙලාවට s3 buckets පාවිච්චි වෙනවා
      },
      {
        protocol: 'https',
        hostname: 'api.exercisedb.io',
      }
    ],
  },
};

export default nextConfig;