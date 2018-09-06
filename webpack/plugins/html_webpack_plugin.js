const HtmlWebpackPlugin = require('html-webpack-plugin');

return new HtmlWebpackPlugin({
    hash: true, //adds unique hash to js each time. better linked to git commit
    filename: 'index.html',
    template : './src/index.html'
});