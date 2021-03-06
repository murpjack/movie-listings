const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const options = {
  mode: "development",
  entry: path.join(__dirname, "src", "scripts", "App.jsx"),

  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    port: 4000,
    contentBase: path.join(__dirname, "dist"),
    publicPath: "/",
    https: true,
    proxy: {
      "/**": {
        target: "https://[::1]:4000/okay",
        secure: true,
        changeOrigin: true
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "file-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },

  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },

  watch: true,

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "template.html"),
      filename: "movie-list.html", //relative to root of the application
      metaTitle: "Now Showing | Movies ",
      hash: true
    }),
    new CopyPlugin([
      {
        from: path.join(__dirname, "src", "fonts"),
        to: path.join(__dirname, "dist", "fonts")
      },
      {
        from: path.join(__dirname, "src", "images"),
        to: path.join(__dirname, "dist", "images")
      }
    ])
  ]
};

module.exports = options;
