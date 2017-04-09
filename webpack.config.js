const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/} ,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: ['./client/stylesheets/style.css'],
      append: true
    })
  ]
}
