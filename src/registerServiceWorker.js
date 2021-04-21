/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-04-21 13:35:41
 * @LastEditors: lax
 * @LastEditTime: 2021-04-21 13:38:17
 * @FilePath: \awesome-suduku\HighSuduku\src\registerServiceWorker.js
 */
/* eslint-disable no-console */

import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
	register(`${process.env.BASE_URL}service-worker.js`, {
		ready() {
			console.log(
				"App is being served from cache by a service worker.\n" +
					"For more details, visit https://goo.gl/AFskqB"
			);
		},
		registered() {
			console.log("Service worker has been registered.");
		},
		cached() {
			console.log("Content has been cached for offline use.");
		},
		updatefound() {
			console.log("New content is downloading.");
		},
		updated() {
			console.log("New content is available; please refresh.");
		},
		offline() {
			console.log(
				"No internet connection found. App is running in offline mode."
			);
		},
		error(error) {
			console.error("Error during service worker registration:", error);
		},
	});
}
