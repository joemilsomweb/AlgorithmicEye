const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const copy_plugin = new CopyWebpackPlugin([ 
        {
         from : "./src/css",
         to : path.resolve('./dist/css')
        },
        {
         from : "./src/images",
         to : path.resolve('./dist/images')
        }
        // {
        //  from : "./src/shaders/**/*.(png|jpg)",
        //  to : path.resolve('./dist/images/shaders/'),
        //  transform : function(){

        //  }
        // }
 ]);

module.exports = copy_plugin;