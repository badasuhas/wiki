const path = require("path");
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: "./src/js/vendor.js",
        main: "./src/js/main.js",
        index: "./src/index.js",
        content: "./src/js/content.js"
    },
    devtool: "none",                            // avoid eval statements
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: "./src/index.pug",
            excludeChunks: ['content']
        }),
        new HTMLWebpackPlugin({
            filename: 'Description/index.html',
            template: "./src/pages/Description.pug",
            excludeChunks: ['index']
        }),
        new HTMLWebpackPlugin({
            filename: 'Design/index.html',
            template: "./src/pages/Design.pug",
            excludeChunks: ['index']
        }),
        new HTMLWebpackPlugin({
            filename: 'Human_Practices/index.html',
            template: "./src/pages/Human_Practices.pug",
            excludeChunks: ['index']
        }),
        new HTMLWebpackPlugin({
            filename: 'Sample/index.html',
            template: "./src/pages/Sample.pug"
        })
        // new HTMLWebpackPlugin({
        //     filename: 'Results/index.html',
        //     template: "./src/contents/Results.pug"
        // }),
        // new HTMLWebpackPlugin({
        //     filename: 'Contribution/index.html',
        //     template: "./src/contents/Contribution.pug"
        // }),
        // new HTMLWebpackPlugin({
        //     filename: 'Engineering/index.html',
        //     template: "./src/contents/Engineering.pug"
        // }),
        // new HTMLWebpackPlugin({
        //     filename: 'Experiments/index.html',
        //     template: "./src/contents/Experiments.pug"
        // })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/i,
                use: ['pug-loader']
            },
            {
                test: /\.html$/i,
                use: ["html-loader"]
            }
        ],
    },
}