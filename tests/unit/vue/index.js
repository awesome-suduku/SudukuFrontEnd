/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-11-27 15:43:00
 * @LastEditors: lax
 * @LastEditTime: 2021-04-06 22:07:07
 * @FilePath: \tao-vue-template\tests\unit\vue\index.js
 */
import tao from "@tao/index.js";
import { createStore } from "vuex";
import { storePlugin } from "@tao/index.js";

const store = createStore({
	state: {},
	mutations: {},
	actions: {},
	plugins: [storePlugin],
});

const global = {
	plugins: [[tao, { log: { isEnabled: false, auto: true } }], store],
};

export { store };
export default global;
