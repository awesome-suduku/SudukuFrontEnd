/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-04-21 15:47:01
 * @LastEditors: lax
 * @LastEditTime: 2021-04-21 16:03:56
 * @FilePath: \HighSuduku\src\store\modules\suduku.js
 */
export default {
	namespaced: true,
	state: {
		suduku: new Array(9).fill(new Array(9).fill(0)),
	},
};
