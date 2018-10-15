const webpack=require('webpack');
const path = require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "/src"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "Babel-loader",
        query:{
          presets:['react','stage-2']
        }
      },
      
      {
        test: /\.(css)$/,
        use:[{loader:"style-loader"},{loader:"css-loader"}]
      },
      {
        test : /\.png$/,
        use:[{loader:"file-loader"},{loader:"image-webpack-loader"},{loader:"img-loader"},{loader:"url-loader"}]
      }
      
    ]
  },
 
  resolve:{
    extensions:[
      '.js',
      '.jsx','.css','.png'
    ]
  },
  devServer:{
    contentBase:'./dist'
  },
  plugins:[
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new HtmlWebpackPlugin({
      template:"./index.html"
    })
  ]
  

};