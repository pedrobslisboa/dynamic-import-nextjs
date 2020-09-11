const withImages = require("next-images");

const nextConfig = {
  distDir: "../build",
};

module.exports = withImages({
  ...nextConfig,
});
