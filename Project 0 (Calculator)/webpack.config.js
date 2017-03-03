
module.exports = {
    entry: './index.jsx',
    output: {
        path: __dirname + '/js/',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    }
}