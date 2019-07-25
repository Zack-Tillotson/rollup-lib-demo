
const config = {
  mode: 'development',
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
    'demolib': './src/index',
  },
  output: {
    library: 'demolib',
    libraryTarget: 'var',
  },
  optimization: {
    usedExports: true,
  },
}

module.exports = config;
