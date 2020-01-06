const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-env'],
            },
          }
        ]
      }
    ]
  },
  entry: {
    app : './src/index.js'
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    publicPath: '/',
    filename: 'build.js',
    library: 'Tags',
    libraryTarget: 'umd',
    libraryExport: 'default'
  }
};