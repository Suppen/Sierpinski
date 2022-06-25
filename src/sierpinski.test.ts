import { Point } from "./Point";
import * as sierpinski from "./sierpinski";
import { Triangle } from "./Triangle";

describe("sierpinski", () => {
	// XXX You will notice the triangles here are point triangles. All their corners
	// are at the same point. This is done to eliminate the randomness, as the function
	// picks a random corner to work with. If all corners are the same, it's predictable
	// where the picked corner is

	describe("nextPoint", () => {
		it("should return the correct point when the initial point's x is greater than the corner's x", () => {
			const corner: Point = [0, 0];
			const point: Point = [1, 0];
			const triangle: Triangle = [corner, corner, corner];

			expect(sierpinski.nextPoint(triangle, point)).toEqual([1 / 2, 0]);
		});

		it("should return the correct point when the corner's x is greater than the initial point's x", () => {
			const corner: Point = [1, 0];
			const point: Point = [0, 0];
			const triangle: Triangle = [corner, corner, corner];

			expect(sierpinski.nextPoint(triangle, point)).toEqual([1 / 2, 0]);
		});

		it("should return the correct point when the initial point's y is greater than the corner's y", () => {
			const corner: Point = [0, 0];
			const point: Point = [0, 1];
			const triangle: Triangle = [corner, corner, corner];

			expect(sierpinski.nextPoint(triangle, point)).toEqual([0, 1 / 2]);
		});

		it("should return the correct point when the corner's x is greater than the initial point's x", () => {
			const corner: Point = [0, 1];
			const point: Point = [0, 0];
			const triangle: Triangle = [corner, corner, corner];

			expect(sierpinski.nextPoint(triangle, point)).toEqual([0, 1 / 2]);
		});

		it("should return the correct point when the corner and initial point are not on the x or y axes", () => {
			const corner: Point = [5, 3];
			const point: Point = [6, 9];
			const triangle: Triangle = [corner, corner, corner];

			expect(sierpinski.nextPoint(triangle, point)).toEqual([
				point[0] + (corner[0] - point[0]) / 2,
				corner[1] + (point[1] - corner[1]) / 2
			]);
		});
	});

	describe("generator", () => {
		const corner: Point = [0, 0];
		const triangle: Triangle = [corner, corner, corner];

		it("should generate the correct sequence", () => {
			const gen = sierpinski.generator(triangle, [64, 32]);

			expect(gen.next().value).toEqual([64, 32]);
			expect(gen.next().value).toEqual([32, 16]);
			expect(gen.next().value).toEqual([16, 8]);
			expect(gen.next().value).toEqual([8, 4]);
			expect(gen.next().value).toEqual([4, 2]);
			expect(gen.next().value).toEqual([2, 1]);
			expect(gen.next().value).toEqual([1, 1 / 2]);
			expect(gen.next().value).toEqual([1 / 2, 1 / 4]);
			expect(gen.next().value).toEqual([1 / 4, 1 / 8]);
		});
	});
});
