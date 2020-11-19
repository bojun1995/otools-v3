module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/styles/base.scss";`,
        prependData: `@import "./src/styles/variable.scss";`,
      },
    },
  },
}
