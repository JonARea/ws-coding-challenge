const webpack = require('webpack');
const path = require('path')

module.exports = {
  context: __dirname,
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    hot: true,
  }
};
