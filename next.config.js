/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname:
          "/djbcnjkin/image/upload/v1690994194/xtxfow6u2ozsmafu8prb.webp",
      },
    ],
  },
};

module.exports = nextConfig;
