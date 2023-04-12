const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const createDate =
  "Обновлено " +
  new Date().toLocaleString("ru", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "Europe/Moscow",
  }) +
  " в " +
  new Date().toLocaleString("ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Europe/Moscow",
  });
const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    clean: true,
    filename: "[name].js",
    assetModuleFilename: "images/[name][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/index.ejs"), // шаблон
      filename: "index.html", // название выходного файла
    }),
    new webpack.DefinePlugin({
      CREATE_DATE: JSON.stringify(createDate),
    }),
    new CleanWebpackPlugin(),
    new Dotenv({
      ignoreStub: true,
      systemvars: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|)$/,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
      },
    ],
  },
  resolve: {
    alias: {
      Project: path.resolve(__dirname, "src/"),
    },
  },
};
