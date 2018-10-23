const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const outputDirectory = path.join(__dirname, 'dist/server');

module.exports = {
  resolve: {
    extensions: ['.js'],
  },
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    server: './src/server/index.js',
  },
  output: {
    path: outputDirectory,
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin([outputDirectory])],
  node: {
    __dirname: false,
  }
};