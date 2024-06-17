module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Bananajia.github.io/'
    : '/',
  assetsDir: "/src/assets",
  outputDir: "dist"
}