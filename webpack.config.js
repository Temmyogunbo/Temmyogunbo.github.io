const webpack = require('webpack');
const path = require('path');
const env = require('dotenv').config();
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT2 = process.env.PORT;

const config = {
  entry: [
    './client/app/src/index.jsx'
  ],
  target: 'web',
  output: {
    filename: 'bundle.js',
    path: path.resolve(`${__dirname}/client/app/public`)
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
    contentBase: path.join(__dirname, 'client/app/public'),
    compress: true,
    port: PORT2,
    publicPath: `http://localhost:${PORT2}/`,
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:8000'
    },
    overlay: true,
    watchContentBase: true
  },
  module: {

    rules: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-0']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'resolve-url-loader',
            'sass-loader?sourceMap'],
        }),
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader', 'resolve-url-loader'],
      },

      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=1000000&mimetype=application/font-woff',
      },
      {
        test: /\.(svg|png|jpe?g)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      { test: /\.json$/, loader: 'json-loader' },
    ]
  },
  devtool: 'source-map',
  node: {
    fs: 'empty'
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new ExtractTextPlugin('./style.css'),
    new webpack.HotModuleReplacementPlugin({
      multistep: true
    }),
    new webpack.DefinePlugin({
      proces: {
        env: {
          SECRET_KEY: JSON.stringify(process.env.SECRET_KEY),
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(`${__dirname}/client/app/index.html`)
    })
  ]
};
module.exports = config;
