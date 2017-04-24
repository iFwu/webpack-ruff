var path = require('path')

module.exports = {
  entry: './presrc/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'src'),
    libraryTarget: 'var'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['es2015', { 'modules': false }]]
          }
        }
      }
    ]
  },
  target: 'node'
}
