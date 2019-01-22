module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/twitter-vue/' : '/',
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/stylesheets/settings/_all.scss";`
      }
    }
  }
}
