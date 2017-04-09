module.exports = {
    entry: './main.js',
    output: {
        path: process.cwd(),
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules|vue\/dist|vue-hot-reload-api|vue-loader/
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }]
    },
    resolve : {
        alias : {"vue$": "vue/dist/vue.js"},
    },
    devtool: '#source-map'
}
