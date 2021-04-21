/*
 * @Description: music test
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-09-27 22:34:43
 * @LastEditors: lax
 * @LastEditTime: 2021-04-07 14:31:05
 */
import { shallowMount } from "@vue/test-utils";
import music from "@tao/component/base/music/music.vue";
import DEFAULT_OPTIONS from "@tao/component/base/music/music.js";

describe("tao-music test", () => {
	const wrapper = shallowMount(music);

	it("comp exists", () => {
		expect(wrapper.exists()).to.equal(true);
	});
	it("musicBox exists", () => {
		expect(wrapper.attributes("id")).to.equal("musicBox");
	});
	it("img exists", () => {
		expect(wrapper.find("img").attributes("id")).to.equal("tao-music-pic");
	});
	it("audio exists", () => {
		expect(wrapper.find("audio").exists()).to.equal(true);
	});

	it("default imgs path", () => {
		expect(wrapper.find("img").attributes("src")).to.equal(
			DEFAULT_OPTIONS.DEFAULT_PLAY_AND_PAUSE_IMAGE_PATH[0]
		);
	});
	it("default right 4%", () => {
		expect(wrapper.find("img").element.style)
			.to.have.property("right")
			.with.to.equal(DEFAULT_OPTIONS.DEFAULT_MUSIC_RIGHT);
	});
	it("default top 3%", () => {
		expect(wrapper.find("img").element.style)
			.to.have.property("top")
			.with.to.equal(DEFAULT_OPTIONS.DEFAULT_MUSIC_TOP);
	});
	it("default music path", () => {
		expect(wrapper.find("audio").attributes("src")).to.equal(
			DEFAULT_OPTIONS.DEFAULT_MUSIC_SRC
		);
	});
	it("default loop true", () => {
		console.log(wrapper.find("audio").attributes("loop"));
		expect(wrapper.find("audio").attributes("loop")).to.equal("loop");
	});
	it("default z-index 10000", () => {
		expect(wrapper.find("img").element.style)
			.to.have.property("z-index")
			.with.to.equal(DEFAULT_OPTIONS.DEFAULT_MUSIC_Z_INDEX + "");
	});
	it("default width 10%", () => {
		expect(wrapper.find("img").element.style)
			.to.have.property("width")
			.with.to.equal(DEFAULT_OPTIONS.DEFAULT_MUSIC_WIDTH);
	});

	const propsData = {
		imgs: [require("./static/open.png"), require("./static/close.png")],
		music_src: require("./static/some.mp3"),
	};
	const wrapper_data = shallowMount(music, { propsData });

	it("props imgs set", () => {
		expect(wrapper_data.find("img").attributes("src")).to.equal(
			propsData.imgs[1]
		);
	});
	it("props music_src set", () => {
		expect(wrapper_data.find("audio").attributes("src")).to.equal(
			propsData.music_src
		);
	});

	// TODO: change click unit
	// TODO: auto play unit
});
