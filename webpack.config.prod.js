const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 降低或最优化 CSS 文件
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// 缩小或降低 JavaScript 代码的体积
const TerserPlugin = require("terser-webpack-plugin");
// 在打包之前使用这个插件尝试清除dist目录下的文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "silence.min.js"
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "silence.min.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-Loader",
          "postcss-Loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-Loader",
          "postcss-Loader",
          "less-Loader"
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
      "@consts": path.resolve("src/config"),
      "@modules": path.resolve("src/plugins"),
      "@templates": path.resolve("src/templates")
    }
  }
};