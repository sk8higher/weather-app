const path = require('path');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',

  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [new FaviconsWebpackPlugin('./images/favicon.ico')],

  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
