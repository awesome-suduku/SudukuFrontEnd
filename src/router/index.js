/*
 * @Description: router rules
 * @Version: 2.0.0
 * @Author: lax
 * @Date: 2020-04-07 14:34:37
 * @LastEditors: lax
 * @LastEditTime: 2021-03-27 15:32:26
 */
import { createRouter, createWebHashHistory } from "vue-router";
import routerHandler from "tao-vue-auto-router";

/**
 * load components from view folder
 *
 */
const views = require.context("./../views/", true, /\.vue$/);

const routes = new routerHandler({ views }).load();

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes,
});
export default router;
