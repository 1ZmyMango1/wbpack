const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "lib"),
    filename: "webpack-demo.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    port: 999,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 21 * 1024,
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash:6][ext]",
        },
      },
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // 预设:转码规则(用bable开发环境本来预设的)
          },
        },
      },
    ],
  },
};
