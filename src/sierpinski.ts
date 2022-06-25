import { Point, x, y } from "./Point";
import { Triangle } from "./Triangle";

/**
 * Creates the next point on a sierpinski triangle
 *
 * @param triangle Outline triangle of the sierpinski triangle
 * @param point Point to calculate the next point from
 *
 * @returns The next point on the sierpinski triangle
 */
export const nextPoint = (triangle: Triangle, point: Point): Point => {
	// Pick a random corner
	const corner = triangle[Math.floor(Math.random() * triangle.length)];

	// Pick the point halfway between this corner and the start point
	const minX = Math.min(x(corner), x(point));
	const maxX = Math.max(x(corner), x(point));
	const minY = Math.min(y(corner), y(point));
	const maxY = Math.max(y(corner), y(point));
	return [minX + (maxX - minX) / 2, minY + (maxY - minY) / 2];
};

/**
 * Generates points on a sierpinski triangle
 *
 * @param triangle Outline of the sierpinski triangle
 * @param startPoint Point to start generating the triangle from
 */
export function* generator(triangle: Triangle, startPoint: Point): Generator<Point, never, void> {
	let point = startPoint;
	while (true) {
		yield point;
		point = nextPoint(triangle, point);
	}
}
