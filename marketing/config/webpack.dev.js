const { merge } = require('webpack-merge')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ModuleFedrationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const deps = require('../package.json').dependencies;
const commonConfig = require('./webpack.common')
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFedrationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            shared: deps
        })
    ]
}

module.exports = merge(commonConfig, devConfig)