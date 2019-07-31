module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  outputDir: "docs",
  assetsDir: "./static",
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://192.168.43.231:11999",
        changeOrigin: true,
        pathRewrite: {
          "/api": ""
        }
      }
    }
  }
};
