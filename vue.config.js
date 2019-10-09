module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'docs',
  // assetsDir: "./static", 把静态文件都放在 static 这文件夹里面
  productionSourceMap: false,
  // configureWepack: {
  //   // 关闭 webpack 的性能提示
  //   performance: {
  //     hints: false,
  //   },
  // },
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://107.22.221.144:29901',
        changeOrigin: true,
        pathRewrite: {
          '/api': '',
        },
      },
    },
  },
};
