/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-10-08 12:56:48
 * @LastEditors: lax
 * @LastEditTime: 2020-11-27 16:38:58
 */
const chai = require("chai");
global.expect = chai.expect;

window.HTMLMediaElement.prototype.play = () => {
	return { catch: () => {} };
};
