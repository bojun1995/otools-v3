const path = require('path');
const resolvePath = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/styles/base.scss";`,
        prependData: `@import "./src/styles/common.scss";`,
        prependData: `@import "./src/styles/variable.scss";`,
      },
    },
  },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
        item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
            resources: [resolvePath('src/styles/common.scss')],
        })
    })
  }
}
