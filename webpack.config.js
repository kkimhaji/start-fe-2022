const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const distPath = path.join(__dirname, 'docs');

module.exports = {

    mode: 'production',

    entry: './src/js/app.js',
    devServer:{
        static:{
            directory: distPath,
        },
        port:9000
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