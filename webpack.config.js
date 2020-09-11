const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCSS = require('mini-css-extract-plugin');

module.exports = [
  {
    devServer: {
      host: 'localhost',
      port: 3000,
      stats: 'errors-only',
      open: true
    },
    
  },
  {
    mode: 'development',
    entry: {
      'colors-and-type': './src/views/ul-kit/colors-and-type/colors-and-type.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist/views/ul-kit/colors-and-type'),
      filename: '[name].js'
    },
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, 'src')
      }
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: { pretty: true }
        },
        {
          test: /\.scss$/,
          use: [miniCSS.loader, 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/views/ul-kit/colors-and-type/colors-and-type.pug',
        filename: 'colors-and-type.html'
      }),
      new miniCSS({
        filename: '[name].css'
      })
    ],
  },
]