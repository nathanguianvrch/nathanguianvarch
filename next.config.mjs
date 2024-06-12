/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  redirects() {
    return [
      {
        source: "/instagram",
        destination: "https://www.instagram.com/nathanguianvarch/",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/nathanguianvarch/",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://www.github.com/nathanguianvrch/",
        permanent: true,
      },
      {
        source: "/mail",
        destination: "mailto:nathanguianvarch@gmail.com",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
