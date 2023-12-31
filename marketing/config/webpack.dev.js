const { merge } = require('webpack-merge')
const ModuleFedrationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const deps = require('../package.json').dependencies;
const commonConfig = require('./webpack.common')
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    output: {
        publicPath: 'http://localhost:8081/'
    },
    plugins: [

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