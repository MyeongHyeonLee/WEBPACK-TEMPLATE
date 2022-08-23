const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  
  entry: './js/main.js',

  output: {

    clean: true
  },

  module: {
    rules: [
      {
      tset: /\.css$/,
      use: [
        'style-loader',
        'css-loader'

      ]
    }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        {from: 'static'}
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }

}