const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, "src/index.js")
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js"
    },

    devServer: {
        static: path.resolve(__dirname, "dist"),
        open: true,
        hot: true
    },

    devtool: "inline-source-map",

    //plugs
    plugins: [
        new HtmlWebpackPlugin({
            title: "Resty Page",
            filename: "index.html",
            template: path.resolve(__dirname,"src/temp.html")
        })
    ]


}