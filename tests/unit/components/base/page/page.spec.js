/*
 * @Description: page test
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-09-27 22:34:43
 * @LastEditors: lax
 * @LastEditTime: 2021-04-07 14:04:14
 */
import { mount } from "@vue/test-utils";
// import page from "@/views/page/Page.vue";
import basePage from "@tao/component/base/page/page.vue";
import global from "./../../../vue/";

describe("tao-page test", () => {
	// const wrapper = shallowMount(page);
	const baseWrapper = mount(basePage, { global });
	// const vm = wrapper.vm;
	const bVm = baseWrapper.vm;

	it("default path", () => {
		expect(bVm.path).to.contain(bVm.DEFAULT_ASSETS_PREFIX + bVm.src);
	});

	it("default path have props.name", async () => {
		await baseWrapper.setProps({
			name: "index",
		});
		expect(bVm.path).to.contain(
			bVm.DEFAULT_ASSETS_PREFIX + bVm.name + "/" + bVm.src
		);
	});
});
