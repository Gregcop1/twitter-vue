module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/stylesheets/settings/_all.scss";`
      }
    }
  }
}
