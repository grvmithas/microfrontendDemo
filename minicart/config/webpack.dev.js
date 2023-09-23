const { merge } = require('webpack-merge')
const ModuleFedrationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const deps = require('../package.json').dependencies;
const commonConfig = require('./webpack.common')
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8084,
        historyApiFallback: {
            index: '/index.html'
        },
    },
    output: {
        publicPath: 'http://localhost:8084/'
    },
    plugins: [

        new ModuleFedrationPlugin({
            name: 'minicart',
            filename: 'remoteEntry.js',
            exposes: {
                './MinicartApp': './src/bootstrap'
            },
            shared: deps
        })
    ]
}

module.exports = merge(commonConfig, devConfig)