const path = require('path');
const {
    VueLoaderPlugin
} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        index: './index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 2099,
        hot: true,
        openPage: './dist/index.html',
        watchOptions: {
            ignored: /node_modules/
        },

    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            },
            //处理css
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                       
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },



        ]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [

        new VueLoaderPlugin(),

        new HtmlWebpackPlugin({
            title: 'Test',
            filename: 'index.html',
            template: './index.html',
        }),

    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },

};