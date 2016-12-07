var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: './src/helloworld.ts',
  output: {
    path: root('dist'),
    filename: 'app.bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        exclude: root('src'),
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css']
        }),
      },

      // all css required in app will be merge in js files
      {
        test: /\.css$/,
        include: root('src'),
        loader: 'raw',
      },
      {
        test: /\.html$/,
        loader: 'raw',
        exclude: root('index.html'),
        include: root('src'),
      },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.ts'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),

    new ExtractTextPlugin({filename: 'css/[name].[hash].css'}),
  ],
};


function root(args){
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
