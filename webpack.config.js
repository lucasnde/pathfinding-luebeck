const path = require('path'),
	webpack = require('webpack'),
	htmlWebpackPlugin = require('html-webpack-plugin'),
	CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: './src/App.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		stats: 'minimal',
		overlay: {
			warnings: true,
			errors: true
		}
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new htmlWebpackPlugin({
			template: './src/index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: 'app.js',
		path: path.join(__dirname, '/docs')
	}
};