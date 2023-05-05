const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: __dirname + '/dist/js',
    filename: 'index.js'
  },
  devServer: {
    // contentBase: './dist',
    static: {
      directory: path.join(__dirname, 'public'),
    },
    host: '192.168.2.10',
    compress: true,
    port: 9002
  }
}