const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/assets/index.html'
    })],
    resolve: { extensions: ["*", ".js", ".jsx"] },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    { loader: 'svg-sprite-loader', options: {} },
                    { loader: 'svgo-loader', options: {
                            plugins: [
                                {removeAttrs: {attrs: 'fill'}},
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /(node_modules|bower_components)/,
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
};