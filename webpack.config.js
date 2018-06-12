var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    hot: true,
    historyApiFallback: true
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: "body"
    })
  ]
};