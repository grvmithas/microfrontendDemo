const { merge } = require('webpack-merge')
const ModuleFedrationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const deps = require('../package.json').dependencies;
const commonConfig = require('./webpack.common')
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: '/index.html'
        },
    },
    output: {
        publicPath: 'http://localhost:8082/'
    },
    plugins: [

        new ModuleFedrationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthApp': './src/bootstrap'
            },
            shared: deps
        })
    ]
}

module.exports = merge(commonConfig, devConfig)