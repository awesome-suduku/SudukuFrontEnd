/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-09-28 13:51:13
 * @LastEditors: lax
 * @LastEditTime: 2020-11-18 22:33:22
 */

describe("tao-music test", () => {
	beforeEach(() => {
		cy.visit("/#/base/music");
	});

	it("visible", () => {
		cy.get("#tao-music-pic").should("be.visible");
	});

	it("click function", () => {
		cy.get("#tao-music-pic").should("have.class", "tao-music-open");

		cy.get("#tao-music-pic").click().should("have.class", "tao-music-close");
	});

	it("audio play", () => {
		cy.get("audio").first().should("have.prop", "paused").should("to.be.false");

		cy.get("#tao-music-pic").click();

		cy.get("audio").first().should("have.prop", "paused").should("to.be.true");
	});
});
