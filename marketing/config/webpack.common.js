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

            }
        ]
    }
}