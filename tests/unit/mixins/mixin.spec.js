/*
 * @Description: mixin test
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-09-27 22:34:43
 * @LastEditors: lax
 * @LastEditTime: 2021-03-26 23:11:10
 */
import { shallowMount } from "@vue/test-utils";
import mixinC from "@/views/mixins/mixin.vue";

describe("base mixin test", () => {
	const wrapper = shallowMount(mixinC, {
		propsData: {
			css: { width: "100%", display: "flex" },
			options: { show: "false", color: "red" },
			show: "true",
			size: "big",
		},
	});
	const vm = wrapper.vm;
	const _s = vm._s;
	const _p = vm._p;

	it("_s merge comp.data.style", () => {
		expect(_s).to.have.property("position").with.to.equal("absolute");
	});

	it("_s merge comp.props.css", () => {
		expect(_s).to.have.property("width").with.to.equal("100%");
	});

	it("css will cover style", () => {
		expect(_s).to.have.property("display").with.to.equal("flex");
	});

	it("_p merge comp.props.options", () => {
		expect(_p).to.have.property("color").with.to.equal("red");
	});

	it("_p merge comp.props", () => {
		expect(_p).to.have.property("size").with.to.equal("big");
	});

	it("options will cover props", () => {
		expect(_p).to.have.property("show").with.to.equal("false");
	});
});
