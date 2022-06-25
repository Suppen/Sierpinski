import * as Triangle from "./Triangle";

describe("triangles", () => {
	describe("equilateral", () => {
		it("should give a triangle with the corners at defined locations", () => {
			const triangle = Triangle.equilateral(1);

			expect(triangle[0]).toEqual([0, 0]);
			expect(triangle[1]).toEqual([1, 0]);
			expect(triangle[2]).toEqual([1 / 2, Math.sqrt(3) / 2]);
		});

		it("should scale based on the input", () => {
			const s = 2;

			const triangle = Triangle.equilateral(s);

			expect(triangle[0]).toEqual([0, 0]);
			expect(triangle[1]).toEqual([s, 0]);
			expect(triangle[2]).toEqual([s / 2, (s * Math.sqrt(3)) / 2]);
		});
	});
});
