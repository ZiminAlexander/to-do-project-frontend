// webpack.config.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

const devMode = mode === 'development';

const target = devMode ? "web" : "browserslist";
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,
    devServer:{
        port: 3000,
        open: true,
        hot: true,
    },
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        clean: true,
        filename: '[name].js',
        assetModuleFilename: "images/[name][ext]"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|)$/,
                type: 'asset/resource',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
        ],
    },
    resolve: {
        alias: {
          Project : path.resolve(__dirname, 'src/'),
        },
      },

};
