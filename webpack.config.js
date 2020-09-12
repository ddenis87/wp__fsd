const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCSS = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = [
  {
    devServer: {
      host: 'localhost',
      port: 3000,
      stats: 'errors-only',
      open: true
    },
  },
  { // - colors-and-type
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
        '@src': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components')
      }
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: { 
            pretty: true,
            root: path.resolve(__dirname, 'src/components/')
          }
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
  { // - form-elements
    mode: 'development',
    entry: {
      'form-elements': './src/views/ul-kit/form-elements/form-elements.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist/views/ul-kit/form-elements'),
      filename: '[name].js'
    },
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components')
      }
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: { 
            pretty: true, 
            root: path.resolve(__dirname, 'src/components/')
          }
        },
        {
          test: /\.scss$/,
          use: [miniCSS.loader, 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/views/ul-kit/form-elements/form-elements.pug',
        filename: 'form-elements.html'
      }),
      new miniCSS({
        filename: '[name].css'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ],
  },
]