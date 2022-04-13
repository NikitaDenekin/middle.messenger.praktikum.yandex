const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
    alias: {
      handlebars: "handlebars/dist/handlebars.js",
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "typescript"],
          },
        },
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      { test: /\.handlebars$/, loader: "handlebars-loader" },
      {
        test: /target-file.js$/,
        use: [
          {
            loader: `val-loader`,
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "messanger",
      template: "./public/index.html",
    }),
  ],
}
