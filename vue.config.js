/*
 * @Description: vue.config.js
 * @Version: 2.0.0
 * @Author: lax
 * @Date: 2020-04-01 12:54:53
 * @LastEditors: lax
 * @LastEditTime: 2021-04-21 13:17:45
 */
const { filePath } = require("./scripts/vue/config");
const tinypngPlugin = require("vue-tinypng-plugin");
const aliOssPlugin = require("tao-webpack-ali-oss");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pro = process.env.NODE_ENV === "production";
const bap = process.env.BAP_NEV === "bap";
const path = require("path");
const json = require("./package.json");
module.exports = {
	configureWebpack: (config) => {
		/* vue 断点 */
		config.devtool = "source-map";
		const js = "js",
			css = "css";
		// plugin
		const plugins = [
			new MiniCssExtractPlugin({
				filename: filePath(css),
				chunkFilename: filePath(css),
			}),
		];
		// output
		const output = {
			filename: filePath(js),
			chunkFilename: filePath(js),
		};

		if (pro) {
			plugins.push(new tinypngPlugin());
			plugins.push(new aliOssPlugin());
			plugins.push(new CompressionPlugin({ test: productionGzipExtensions }));
		}
		if (bap) {
			plugins.push(new BundleAnalyzerPlugin());
		}

		return { output, plugins };
	},
	/* 设置build的引用文件路径 */
	publicPath: pro
		? aliOssPlugin.getPrefix(require("./oss.js"), json.name)
		: "./",
	/* 生产环境sourcemap 清除 */
	productionSourceMap: false,
	/* 取消文件名hash值 */
	filenameHashing: false,
	chainWebpack: (config) => {
		// inject title desc
		config.plugin("html").tap((args) => {
			args[0].title = json.title;
			args[0].desc = json.description;
			return args;
		});
		/**
		 * 自定义file-loader
		 * html图片访问格式调整：[name].[ext]?v=[hash:6]
		 * like: content.png?v=s2421a
		 */
		config.module
			.rule("images")
			.use("url-loader")
			.loader("file-loader")
			.options({
				publicPath: pro
					? aliOssPlugin.getPrefix(require("./oss.js"), json.name)
					: "./",
				name: "img/[folder]/[name].[ext]?v=[hash:6]",
			});
		const mediaRule = config.module.rule("media");
		mediaRule.uses.clear();
		mediaRule
			.use("url-loader")
			.loader("file-loader")
			.options({
				publicPath: pro
					? aliOssPlugin.getPrefix(require("./oss.js"), json.name)
					: "./",
				name: "[folder]/[name].[ext]?v=[hash:6]",
			});
		config.resolve.alias.set("@", path.join(__dirname, "./src"));
	},
};
