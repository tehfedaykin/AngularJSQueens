const path = require('path');
const webpack = require('webpack');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
	mode: 'development',
	entry: {
    'index': path.join(__dirname, 'app/index.ts')
  },
	output: {
		filename: '[name]-bundle.js',
		path: '/',
		devtoolLineToLine: true,
    pathinfo: true,
    sourceMapFilename: '[name].js.map'
	},
	devServer: {
		contentBase: path.join(__dirname, '/public'),
		port: 8080,
    compress: true
  },
	plugins: [
		new webpack.ProgressPlugin(), 
		new HtmlWebpackPlugin({
			template: './app/index.html',
			//filename: './dist/index.html',
			inject: 'body',
			title: 'testing',
			hash: true,
			minify: false
		})],

	module: {
		rules: [
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
					options: {
					attrs: [':data-src']
					}
				}
			},
			{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
		]
	},

	// optimization: {
	// 	splitChunks: {
	// 		cacheGroups: {
	// 			vendors: {
	// 				priority: -10,
	// 				test: /[\\/]node_modules[\\/]/
	// 			}
	// 		},

	// 		chunks: 'async',
	// 		minChunks: 1,
	// 		minSize: 30000,
	// 		name: true
	// 	}
	// },

	resolve: {
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	}
};
