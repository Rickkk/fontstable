'use strict'
var path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: [
    './src/app.js'
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: "vue-style-loader" },
          // { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
    // {
    //   test: /\.m?js$/,
    //   exclude: /(node_modules|bower_components)/,
    //   use: {
    //     loader: 'babel-loader',
    //     options: {
    //       presets: ['@babel/preset-env'],
    //       plugins: ['@babel/plugin-proposal-object-rest-spread']
    //     }
    //   }
    // }  
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },              
    ]
  },
  devServer: {
    inline:true,
    port: 10000,
    watchContentBase: true,
     publicPath: '/dist/',
     contentBase: path.join(__dirname, './'),

  },  
  plugins: [
   // new UglifyJSPlugin(),
   new VueLoaderPlugin()    
  ]
}