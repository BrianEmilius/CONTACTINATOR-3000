var HtmlWebpackPlugin = require("html-webpack-plugin");
var { join } = require("path");

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.css$/i,
				use: [
					"style-loader",
					"css-loader"
				]
			},
			{
				test: /\.(gif|png|jpe?g)$/i,
				use: [
					{
						loader: "file-loader"
					}
				]
			},
			{
				test: /\.svg$/,
				use: ["@svgr/webpack"]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "./index.html"
		})
	],
	devServer: {
		contentBase: join(__dirname, "public")
	}
};
