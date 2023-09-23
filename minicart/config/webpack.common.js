const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    module: {
        rules: [
            {
                test: /\m?.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // jsx code, es2015,16,17 code to es5 transpiled
                        plugins: ['@babel/plugin-transform-runtime'] //enables syntax like async await
                    }
                },

            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: {
                    loader: 'css-loader',
                },

            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
    ]
}