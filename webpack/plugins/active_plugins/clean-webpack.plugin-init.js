const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');


module.exports = new CleanWebpackPlugin([path.resolve('./dist')], {
	root : path.resolve('./')
});