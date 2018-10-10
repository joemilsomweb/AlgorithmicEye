const webpack = require('webpack');
const path = require('path');

module.exports = new webpack.ProvidePlugin({
      // 'paper' : path.join(__dirname, '/src/js/lib/paperjs/paper-full.min'),
      'noise' : path.resolve('./src/js/lib/noise'),
      'TweenMax' : path.resolve('./src/js/lib/TweenMax/TweenMax.min'),
      'TimelineMax' : path.resolve('./src/js/lib/TweenMax/TimelineMax.min')
});