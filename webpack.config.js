const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
	entry: './index.js',
    target: 'node',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].chunk.js',
	},
    plugins: [
        new CleanWebpackPlugin([ './dist' ])
    ],
}
