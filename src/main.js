/*
 * @Description: default main.js
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-04-07 14:34:37
 * @LastEditors: lax
 * @LastEditTime: 2021-04-21 13:42:08
 */

// const isDev = process.env.NODE_ENV === "development";

/**
 * default import vue router store
 */
import "./css/pmdInit.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.config.performance = process.env.NODE_ENV !== "production";

app.use(router);

app.use(store);

// load vant
// import Vant from "vant";
// import "vant/lib/index.css";
// Vue.use(Vant);

// load Tao
// import Tao from "tao-vue-template";
// import fmPlugin from "fm93-vue-template";
// import "tao-vue-template/lib/tao.css";
// Vue.use(Tao, {
// 	log: { isEnabled: isDev },
// 	plugins: [fmPlugin],
// });

// import "video.js/dist/video-js.css";

// animate.css
// import animated from "animate.css";
// Vue.use(animated);

// load mixin
import mixin from "@/mixins/global.js";
app.mixin(mixin);

// swiper
// import VueAwesomeSwiper from "vue-awesome-swiper";
// Vue.use(VueAwesomeSwiper);

// eslint-disable-next-line
app.config.productionTip = false;

// wx
// import wxHandler from "wxsdk-handler";

import "./registerServiceWorker";

// Vue.use(wxHandler, {
// 	configFile: require("./../wx.js"),
// 	config: isDev
// 		? {
// 				debug: true,
// 				appid: "wxbfaae54e7f89f3fa",
// 				server: "https://wxt.server.1045fm.cn/",
// 				path: "wx/sign",
// 		  }
// 		: {},
// });

app.mount("#app");
