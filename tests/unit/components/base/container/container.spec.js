/*
 * @Description: container test
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-09-27 22:34:43
 * @LastEditors: lax
 * @LastEditTime: 2021-04-07 09:48:22
 */
import { shallowMount } from "@vue/test-utils";
import container from "@tao/component/base/container/container.vue";

describe("tao-container test", () => {
	const wrapper = shallowMount(container);
	const vm = wrapper.vm;
	const _s = vm._s;

	it("default display flex", () => {
		expect(_s).to.have.property("display").with.to.equal("flex");
	});

	it("default overflow hidden", () => {
		expect(_s).to.have.property("overflow").with.to.equal("hidden");
	});

	it("class name: tao-container", () => {
		expect(wrapper.classes("tao-container")).to.equal(true);
	});
});
