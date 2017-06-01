const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './app/index.js'
    },
    output: {
        path: path.join(__dirname, "./dist"),
        publicPath: "/dist/",
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}
