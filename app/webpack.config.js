const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  mode: 'production',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  entry: {
    'demoapp': './src/index',
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        mangle: false,
        compress: {
          unused: true,
        }
      }
    })],
  },
}

module.exports = config;
