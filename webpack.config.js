var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var plugins = [
    new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin('react-datetimepicker.css')
];

if (process.env.COMPRESS) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    );
}



module.exports = {

    entry: ["./src/DateTimeField.js"],

    output: {
        path: path.join(__dirname, "/dist/"),
        library: "ReactDatetimepicker",
        libraryTarget: "umd"
    },

    resolve: {
        extensions: ["", ".js"]
    },

    externals: {
        "react": "React",
        "react/addons": "React",
        "moment": "moment"
    },

    module: {
        loaders: [
            {test: /\.js?$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            {
                test: /\.(otf|eot|png|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=8192'
            }
        ]
    },

    plugins: plugins

};
