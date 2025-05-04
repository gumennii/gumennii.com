const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: {
    index: './src/js/main.js'
  },
  output: {
    publicPath: '/'
  },

  devServer: {
    port: 8080,
    devMiddleware: {
      writeToDisk: false
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/page/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
      favicon: './src/img/favicon.ico'
    })
  ]
}
