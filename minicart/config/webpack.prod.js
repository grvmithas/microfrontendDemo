const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const deps = require('../package.json').dependencies
const commonConfig = require('./webpack.common')
const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/minicart/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'minicart',
            filename: 'remoteEntry.js',
            exposes: {
                './MinicartApp': `./src/bootstrap`,
            },
            shared: deps
        })
    ]
}
module.exports = merge(commonConfig, prodConfig)