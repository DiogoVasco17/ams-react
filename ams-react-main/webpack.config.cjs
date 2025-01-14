/* eslint-disable @typescript-eslint/no-require-imports */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.tsx",
  output: {
    path: path.join(__dirname, "/build")
  },
  devServer: { port: 3000, historyApiFallback: true },
  module: {
    rules: [
      {
        test: /\.(?:ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".js"]
        },
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.(css)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "AMS-REACT",
      template: "./public/index.html",
      filename: "index.html"
    }),
    new Dotenv({
      systemvars: true
    })
  ]
};
