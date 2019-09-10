
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
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  entry: {
    'index': './src/index',
    'Comp1': './src/Comp1',
    'Comp2': './src/Comp2',
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
