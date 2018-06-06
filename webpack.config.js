const path = require('path')
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')


module.exports = {
  plugins: [
    // new BundleAnalyzerPlugin()
    new LodashModuleReplacementPlugin(),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery',
    //   Popper: ['popper.js', 'default']
    // })
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '~': path.join(__dirname, './resources/assets/js')
    }
  },
  output: {
    // path: process.env.MIX_APP_URL,
    // chunkFilename: 'js/[name].[chunkhash].js',
    chunkFilename: 'dist/js/chunk.[name].js',
    // publicPath: mix.config.hmr ? '//localhost:8080' : '/DEV/hotel'
    publicPath:  process.env.MIX_PUBLIC_PATH //'/DEV/hotel/public'
  }
}
