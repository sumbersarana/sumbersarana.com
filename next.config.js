/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  generateEtags: false,
  poweredByHeader: false,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push("_http_common");
      config.externals.push("@prisma/client");
    }
    return config;
  },
  target: "serverless",
  generateBuildId: () => "build",
};
