var path = require('path');
var htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new htmlWebPackPlugin({
        template: 'src/index.html',
        inject: 'head',
        hash: true
      })
    ]
};
