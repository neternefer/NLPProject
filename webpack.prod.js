const path = require('path');
const webpack = require('webpack');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require("workbox-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle-[hash].min.js",
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
      },
      plugins: [
        new HTMLWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin({
            verbose: true
        }),
        new MiniCSSExtractPlugin({
            filename: "[name].scss",
        }),
        // new WorkboxPlugin.GenerateSW()
    ]
};