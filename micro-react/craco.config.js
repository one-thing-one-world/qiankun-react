
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
console.log('hello')
const packageName = require('./package.json').name
console.log(packageName, 'packageName')
module.exports = {
  webpack: {
    alias: {
      '~': resolve('src'),
      components: resolve('src/components'),
    },

    configure: (webpackConfig, { env, paths }) => {
      console.log(env, paths, "webpackParams")
      webpackConfig.output = {
        ...webpackConfig.output,
        ...{
          library: `${packageName}-[name]`,
          globalObject: 'window',
          libraryTarget: 'umd',
        },
      }
      return webpackConfig;
    }

  },
}
