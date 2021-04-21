/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-09-01 16:05:12
 * @LastEditors: lax
 * @LastEditTime: 2021-04-06 17:22:14
 */
module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
	parserOptions: {
		parser: "babel-eslint",
		sourceType: "module",
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"vue/no-multiple-template-root": 0,
	},
	overrides: [
		{
			files: [
				"**/__tests__/*.{j,t}s?(x)",
				"**/tests/unit/**/*.spec.{j,t}s?(x)",
			],
			env: {
				mocha: true,
				jest: true,
			},
		},
	],
};
