
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
      webpackConfig.optimization = {
        splitChunks: {
          chunks: 'async',
          minSize: 20000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: 10,
              enforce: true,
              reuseExistingChunk: true, // 属性是重用切分的包，不切新的
            },
            // reactDepsVender: {
            //   test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|@reduxjs\/toolkit\/dist)[\\/]/,
            //   name: 'react-deps-lib',
            //   enforce: true,
            //   priority: 40,
            //   reuseExistingChunk: true,
            // },
            // antdVender: {
            //   name: 'ant-lib',
            //   test: /[\\/]node_modules[\\/](@ant-design|antd\/lib|antd\/es)[\\/]/,
            //   enforce: true,
            //   priority: 30,
            //   reuseExistingChunk: true,
            // },
            // codemirror: {
            //   name: 'codemirror',
            //   test: /[\\/]node_modules[\\/](codemirror)[\\/]/,
            //   enforce: true,
            //   priority: 30,
            //   reuseExistingChunk: true,
            // },
            // wangeditor: {
            //   name: 'wangeditor',
            //   test: /[\\/]node_modules[\\/](@wangeditor)[\\/]/,
            //   enforce: true,
            //   priority: 30,
            //   reuseExistingChunk: true,
            // },
            // echartsVender: {
            //   name: 'echartsVender',
            //   test: /[\\/]node_modules[\\/](echarts|zrender)[\\/]/,
            //   enforce: true,
            //   priority: 30,
            //   reuseExistingChunk: true,
            // },
          },
        },
      }

      return webpackConfig;
    }
  }
}






// ========= 项目配置
// const AntdMomentWebpackPlugin = require('@ant-design/moment-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const path = require('path')
// const { whenProd } = require('@craco/craco')
// // const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// // const WebpackBar = require('webpackbar')
// // const CompressionPlugin = require('compression-webpack-plugin')
// // // const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// // const TerserPlugin = require('terser-webpack-plugin')

// // const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
// // const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')
// const resolve = dir => path.resolve(__dirname, dir)
// console.log('hello')
// module.exports = {
//   webpack: {
//     plugins: [
//       new AntdMomentWebpackPlugin(),
//       // new BundleAnalyzerPlugin({
//       //   analyzerMode: 'server',
//       //   analyzerHost: '127.0.0.1',
//       //   analyzerPort: 9888,
//       //   openAnalyzer: true,
//       //   reportFilename: path.resolve(__dirname, 'analyzer/index.html'),
//       // }),
//       // new WebpackBar({
//       //   profile: true,
//       // }),
//       // new CompressionPlugin({
//       //   filename: '[path][base].gz',
//       //   algorithm: 'gzip',
//       //   test: /\.js$|\.css$/,
//       //   threshold: 10240,
//       //   minRatio: 0.8,
//       // }),
//       // new TerserPlugin({
//       //   // sourceMap: true, // Must be set to true if using source-maps in production
//       //   terserOptions: {
//       //     ecma: undefined,
//       //     warnings: false,
//       //     parse: {},
//       //     compress: {
//       //       drop_console: process.env.NODE_ENV === 'production', // 生产环境下移除控制台所有的内容
//       //       drop_debugger: false, // 移除断点
//       //       pure_funcs:
//       //         process.env.NODE_ENV === 'production' ? ['console.log'] : '', // 生产环境下移除console
//       //     },
//       //   },
//       // }),
//       // new UglifyJsPlugin({
//       //   uglifyOptions: {
//       //     // 开启打包缓存
//       //     cache: true,
//       //     // 开启多线程打包
//       //     parallel: true,
//       //     compress: {
//       //       // warnings: false,
//       //       drop_debugger: true,
//       //       drop_console: true,
//       //     },
//       //   },
//       //   sourceMap: false,
//       //   parallel: true,
//       // }),
//     ],

//     alias: {
//       '@': resolve('src'),
//       components: resolve('src/components'),
//     },
//     configure: (webpackConfig, { env, paths }) => {
//       webpackConfig.output = {
//         ...webpackConfig.output,
//         ...{
//           assetModuleFilename: 'webConfig/static/assets/[name].[hash][ext]',
//           filename: whenProd(
//             () => 'webConfig/static/js/[name].[contenthash:8].chunk.js',
//             'webConfig/static/js/[name].chunk.js'
//           ),
//           chunkFilename: whenProd(
//             () => 'webConfig/static/js/[name].[contenthash:8].chunk.js',
//             'webConfig/static/js/[name].chunk.js'
//           ),
//         },
//       }
//       webpackConfig.plugins = webpackConfig.plugins.map(plugin => {
//         whenProd(() => {
//           if (plugin instanceof MiniCssExtractPlugin) {
//             Object.assign(plugin.options, {
//               filename: 'webConfig/static/css/[name].[contenthash:8].css',
//               chunkFilename:
//                 'webConfig/static/css/[name].[contenthash:8].chunk.css',
//             })
//           }
//         })
//         return plugin
//       })

//       if (process.env.NODE_ENV === 'production') {
//         webpackConfig.optimization = {
//           splitChunks: {
//             chunks: 'all',
//             minSize: 20000,
//             minChunks: 1,
//             maxAsyncRequests: 30,
//             maxInitialRequests: 30,
//             cacheGroups: {
//               vendors: {
//                 test: /[\\/]node_modules[\\/]/,
//                 name: 'vendors',
//                 priority: 10,
//                 enforce: true,
//                 reuseExistingChunk: true, // 属性是重用切分的包，不切新的
//               },
//               reactDepsVender: {
//                 test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|@reduxjs\/toolkit\/dist)[\\/]/,
//                 name: 'react-deps-lib',
//                 enforce: true,
//                 priority: 40,
//                 reuseExistingChunk: true,
//               },
//               antdVender: {
//                 name: 'ant-lib',
//                 test: /[\\/]node_modules[\\/](@ant-design|antd\/lib|antd\/es)[\\/]/,
//                 enforce: true,
//                 priority: 30,
//                 reuseExistingChunk: true,
//               },
//               codemirror: {
//                 name: 'codemirror',
//                 test: /[\\/]node_modules[\\/](codemirror)[\\/]/,
//                 enforce: true,
//                 priority: 30,
//                 reuseExistingChunk: true,
//               },
//               wangeditor: {
//                 name: 'wangeditor',
//                 test: /[\\/]node_modules[\\/](@wangeditor)[\\/]/,
//                 enforce: true,
//                 priority: 30,
//                 reuseExistingChunk: true,
//               },
//               echartsVender: {
//                 name: 'echartsVender',
//                 test: /[\\/]node_modules[\\/](echarts|zrender)[\\/]/,
//                 enforce: true,
//                 priority: 30,
//                 reuseExistingChunk: true,
//               },
//             },
//           },
//         }
//       }

//       for (const rule of webpackConfig.module.rules) {
//         if (!rule.oneOf) {
//           // eslint-disable-next-line no-continue
//           continue
//         }

//         rule.oneOf[2].use[1].options.name =
//           'webConfig/static/assets/[name].[hash].[ext]'
//       }

//       return webpackConfig
//     },
//   },
// }
