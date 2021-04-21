/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-06-29 20:29:55
 * @LastEditors: lax
 * @LastEditTime: 2021-04-21 13:44:00
 */
export default {
	data: function () {
		return {
			env: process.env.NODE_ENV === "production",
		};
	},
};
