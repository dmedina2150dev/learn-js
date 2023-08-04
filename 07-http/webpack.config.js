const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtractPlugin.loader, "css-loader" ],

            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                  
            }
        ]
    },

    optimization: {},

    stats: {
        children: true,
    },
    plugins: [
        new HtmlWebPack({
            title: 'Webpack 01',
            template: './src/index.html'
            // filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            // filename: '[name].[fullhash].css', // Nombre original del archivo con hash
            filename: '[name].css', // Nombre asignado por defecto 
            ignoreOrder: true
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/assets", to: "assets/" }
            ],
        }),
    ],
}