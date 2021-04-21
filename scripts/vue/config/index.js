/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-01-06 19:35:40
 * @LastEditors: lax
 * @LastEditTime: 2021-04-21 13:19:13
 * @FilePath: \awesome-suduku\HighSuduku\scripts\vue\config\index.js
 */
module.exports = {
	filePath(name, temp = `${name}/[name].${name}?v=[hash:6]`) {
		return temp;
	},
};
