const path = require('path');
const resolvePath = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/base.scss";
          @import "@/styles/common.scss";
          @import "@/styles/variable.scss";
        `,
      },
    },
  },
}
