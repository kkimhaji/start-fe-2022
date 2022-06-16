const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const distPath = path.join(__dirname, 'dist');
const staticPath = path.join(__dirname, 'static');

module.exports = {

    mode: 'development',

    entry: './src/js/app.js',
    devServer:{
        static:{
            directory: './src/json',
        },
        compress: true,
        port:9000,

    },
    output: {
        path: distPath,
        filename: 'main.js',
    },
    plugins:[ new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },

}