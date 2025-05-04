const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

const BUILD_PATH = path.resolve(__dirname, '../build')

module.exports = {
  mode: 'production',
  devtool: 'source-map',

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/js/main.js'
  },

  // how to write the compiled files to disk
  // https://webpack.js.org/concepts/output/
  output: {
    filename: '[name].js',
    publicPath: './',
    path: BUILD_PATH
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
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        type: "asset",
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          {
            loader: ImageMinimizerPlugin.loader,
            options: {
              minimizerOptions: {
                plugins: [["mozjpeg", { quality: 70 }]],
              },
            },
          },
        ],
      },
    ]
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new CleanWebpackPlugin(), // cleans output.path by default
    new HtmlWebpackPlugin({
      template: './src/page/index.html',
      inject: true,
      filename: 'index.html',
      favicon: './src/img/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/img/favicon/favicon-16x16.png', to: 'favicon-16x16.png' },
        { from: './src/img/favicon/favicon-32x32.png', to: 'favicon-32x32.png' },
        { from: './src/img/favicon/apple-touch-icon.png', to: 'apple-touch-icon.png' },
        { from: './src/img/favicon/site.webmanifest', to: 'site.webmanifest' }
      ]
    }),
  ],

  // https://webpack.js.org/configuration/optimization/
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ]
  }
}
