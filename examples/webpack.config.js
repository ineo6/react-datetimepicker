var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    entry: {
        "basic": "./examples/basic/basic.js"
    },

    output: {
        path: __dirname,
        filename: "[name].js",
        chunkFilename: "[id].chunk.js",
        sourceMapFilename: "[name].map",
        assetPath: "/"
    },

    resolve: {
        alias: {
            "react-datetimepicker": "../../src/DateTimeField"
        },
        extensions: ["", ".js"]
    },

    module: {
        loaders: [
            {test: /\.js?$/, exclude: /node_modules/, loader: "babel-loader"},
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(otf|eot|png|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=8192'
            }
        ]
    },


    devServer: {
        contentBase: "examples/",
        stats: {colors: true}
    },


    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, "/basic/index.html")
    })]

};
