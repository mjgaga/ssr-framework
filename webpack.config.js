const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    // cache: false,
    devtool: 'source-map',
    entry: {
        index: './src/client.js',
    },
    output: {
        // filename: 'js/[name]-[hash:6].js',
        filename: 'assets/js/[name]-[hash:6].js',
        path: path.resolve(__dirname, './.tmp/client'),
        chunkFilename: 'assets/js/[name]-[chunkhash:6].js',
        assetModuleFilename: 'assets/image/[name]-[hash:6][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-transform-modules-commonjs'
                        ],
                    },
                },
            },

            {
                test: /\.(less|css)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            // url: true,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                            additionalData: `@import '${__dirname}/src/app/view.less';`
                        },
                    },
                ],
            },

            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/style/[name]-[hash:6].css',
            chunkFilename:'assets/style/[name]-[chunkhash:6].css'
        }),
        new HtmlWebpackPlugin({
            template: 'public/template.html',
            filename:"assets/template.html",
            inject: 'body',
            hash: false,
        }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, "src/images/favicon.ico"), to: path.resolve(__dirname, ".tmp/client/favicon.ico") },
            ],
        }),

    ],
};