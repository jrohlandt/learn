var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');
var webpack = require('webpack');

module.exports = {
  entry: './client.js',
  output: {
    path: './public',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: [ 'es2015', 'react', 'stage-2' ]
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new ExtractTextPlugin('../style.css', {
        allChunks: true
    })
  ]
};
