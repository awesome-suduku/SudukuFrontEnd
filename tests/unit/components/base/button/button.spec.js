/*
 * @Description: button test
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-09-27 22:34:43
 * @LastEditors: lax
 * @LastEditTime: 2021-04-07 14:15:44
 */
import { shallowMount } from "@vue/test-utils";
import button from "@tao/component/base/button/button.vue";
import defaultOptions from "@tao/component/base/button/button.js";

describe("tao-button test", () => {
	const wrapper = shallowMount(button);
	const vm = wrapper.vm;
	// const _s = vm._s;
	const _p = vm._p;

	it("default exist", () => {
		expect(wrapper.classes("tao-button")).to.equal(true);
	});

	it("default type normal", () => {
		expect(_p)
			.to.have.property("type")
			.with.to.equal(defaultOptions.DEFAULT_BUTTON_TYPE);
	});

	it("default src", () => {
		expect(_p)
			.to.have.property("src")
			.with.to.equal(defaultOptions.DEFAULT_BUTTON_IMG);
	});

	it("default width 15%", () => {
		expect(_p)
			.to.have.property("width")
			.with.to.equal(defaultOptions.DEFAULT_WIDTH);
	});

	it("default top null", () => {
		expect(_p)
			.to.have.property("top")
			.with.to.equal(defaultOptions.DEFAULT_TOP);
	});

	it("default bottom null", () => {
		expect(_p)
			.to.have.property("bottom")
			.with.to.equal(defaultOptions.DEFAULT_BOTTOM);
	});

	it("default left 0", () => {
		expect(_p)
			.to.have.property("left")
			.with.to.equal(defaultOptions.DEFAULT_LEFT);
	});

	it("default right 0", () => {
		expect(_p)
			.to.have.property("right")
			.with.to.equal(defaultOptions.DEFAULT_RIGHT);
	});

	it("click emit", () => {
		wrapper.trigger("click");
		expect(wrapper.emitted().click).to.be.ok;
	});
});
