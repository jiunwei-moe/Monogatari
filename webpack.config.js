/* eslint-env node */

const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: "./engine/js/monogatari.js"
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new HtmlWebpackPlugin({
			template: "./engine/index.html"
		}),
		new webpack.IgnorePlugin(/electron/)
	],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				]
			},
			{
				test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				use: [{
					loader: "file-loader",
					options: {
						name: "[name].[ext]"
					}
				}]
			},
			{
				test: require.resolve("./engine/service-worker.js"),
				use: [{
					loader: "file-loader",
					options: {
						name: "[name].[ext]"
					}
				}]
			},
			{
				test: require.resolve("artemis/dist/artemis"),
				use: "exports-loader?$_,$_ready,Storage"
			}
		]
	}
};
