/*
 * @Description: container test
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-09-27 22:34:43
 * @LastEditors: lax
 * @LastEditTime: 2021-04-06 22:06:29
 */
import { mount } from "@vue/test-utils";
import h5 from "@/views/page/H5.vue";
import global from "./../../vue/";

describe("tao-h5 test", () => {
	const wrapper = mount(h5, { global });
	const vm = wrapper.vm;

	it("auto inject tao-page", () => {
		expect(vm.h5.getPages()).to.deep.include.members([{ name: "index" }]);
	});

	it("auto inject tao-page: in father element", () => {
		expect(vm.h5.getPages()).to.deep.include.members([
			{ name: "desc1" },
			{ name: "desc2" },
		]);
	});

	it("auto inject tao-page: in father component", () => {
		expect(vm.h5.getPages()).to.deep.include.members([
			{ name: "comp1" },
			{ name: "comp2" },
			{ name: "comp3" },
		]);
	});
});
