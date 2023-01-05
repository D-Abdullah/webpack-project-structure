// Generated using webpack-cli https://github.com/webpack/webpack-cli
"use strict";
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var PugPlugin = require("pug-plugin");

var isProduction = process.env.NODE_ENV === "production";

var stylesHandler = MiniCssExtractPlugin.loader;

var config = {
	entry: "./src/main.ts",
	output: {
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		open: true,
		host: "localhost",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.pug"
		}),
		new PugPlugin(), // enable rendering of Pug files defined in Webpack entry

		new MiniCssExtractPlugin({
			filename: "./src/style.sass"
		}),
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /.pug$/,
				loader: PugPlugin.loader, // Pug loader
			},
			{
				test: /\.(ts|tsx)$/i,
				loader: "ts-loader",
				exclude: ["/node_modules/"],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, "css-loader", "postcss-loader"],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
	resolve: {
		modules: [
            "node_modules",
            path.resolve(__dirname),
        ],
		extensions: [".tsx", ".ts", ".jsx", ".js",".pug",".sass",".scss",".css"],
	},
};

module.exports = function () {
	if (isProduction) {
		config.mode = "production";
	} else {
		config.mode = "development";
	}
	return config;
};
