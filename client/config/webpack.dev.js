const webpack = require('webpack');
const path = require('path');
const dotEnv = require('dotenv');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotEnvWebpack = require('dotenv-webpack');

dotEnv.config();

const port = parseInt(process.env.PORT, 10) || 5000;

const config = {
  entry: [
    './app/src/index.jsx'
  ],
  target: 'web',
  output: {
    filename: 'bundle.js',
    path: path.resolve(`./app/public`),
    publicPath: `http://localhost:${port}/`
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: port,
    publicPath: `http://localhost:${port}/`,
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:8000'
    },
    overlay: true,
    contentBase: path.join(__dirname, './app/public'),
    watchContentBase: true
  },
  module: {

    rules: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
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

  node: {
    fs: 'empty'
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new ExtractTextPlugin('./style.css'),
    new webpack.HotModuleReplacementPlugin(),
    new dotEnvWebpack({
      path: '../.env',
      safe: false,
    }),
    new webpack.DefinePlugin({
      proces: {
        env: {
          SECRET_KEY: JSON.stringify(process.env.SECRET_KEY)
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(`./app/index.html`)
    })
  ]
};
module.exports = config;
