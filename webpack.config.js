var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
      port: 3000,
      host: process.env.PUBLIC ? '0.0.0.0' : 'localhost',
      disableHostCheck: true,
      contentBase: './dist'
    },
    entry: './src/index.js',
    module: {
        rules: [
            { test: /.scss$/, use: extractTextWebpackPlugin.extract({ use: 'css-loader!sass-loader' }) },
            { test: /.html$/, loader: 'html-loader' },
            { test: /.js$/, exclude: /node_modules/, loader: ['ng-annotate-loader?ngAnnotate=ng-annotate-patched', 'babel-loader'] }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new htmlWebpackPlugin({ template: 'src/index.html', inject: 'head', hash: true }),
      new extractTextWebpackPlugin('style.css')
    ]
};
