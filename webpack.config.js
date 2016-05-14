'use strict'

var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    app: ['./app/src/js/entries/app.js'],
    vendor: ['jquery', 'lodash', 'react', 'bootstrap']
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/"
  },
  eslint: {
    configFile: '.eslintrc'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      '_': 'lodash',
      'React': 'react',
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendors.min.js', Infinity)
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        include: '/src/js/'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'stage-3', 'es2015']
        }
      }
    ]
  }
}
