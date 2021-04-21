/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-09-23 23:40:23
 * @LastEditors: lax
 * @LastEditTime: 2021-04-21 13:43:46
 */
import { createStore } from "vuex";
// import { storePlugin } from "tao-vue-template";
const store = new createStore({
	state: {},
	mutations: {},
	actions: {},
	plugins: [],
});

const mods = require.context("./modules/", true, /\.js$/);
mods.keys().map((mod) => {
	store.registerModule(getName(mod), mods(mod).default);
});

export default store;

function getName(str, is = true) {
	const p = "./";
	let name = str.slice(str.indexOf(p) + 2, str.indexOf(".js"));
	if (is) name = name.toLowerCase();
	return name;
}
