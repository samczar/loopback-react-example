const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'sourcemap',

  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './src/client/browser.js'
  ],

  output: {
    path: path.join(__dirname, 'public/'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src/common'),
      path.resolve(__dirname, 'src/client')
    ]
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: [
        path.join(__dirname, 'src/client'),
        path.join(__dirname, 'src/common')
      ]
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
    }]
  },

  postcss: [
    require('autoprefixer-core')
  ],

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

};
