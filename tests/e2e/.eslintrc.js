/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-10-10 13:53:34
 * @LastEditors: lax
 * @LastEditTime: 2020-11-17 17:50:04
 * @FilePath: \tao-vue-template\tests\e2e\.eslintrc.js
 */
module.exports = {
	plugins: ["cypress"],
	env: {
		mocha: true,
		"cypress/globals": true,
	},
	rules: {
		strict: "off",
	},
};
