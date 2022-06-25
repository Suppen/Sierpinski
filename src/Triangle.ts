import { Point } from "./Point";

/** A tuple representing the three corners of a triangle */
export type Triangle = readonly [Point, Point, Point];

/**
 * Creates an equilateral triangle. Its first corner is on the origin. The second corner is on the x axis in positive direction. The third corner is above the x axis, in positive y direction.
 *
 * @param s Desired length of the sides
 *
 * @returns An equilateral triangle with the desired side lengths
 */
export const equilateral = (s: number): Triangle => [
	[0, 0],
	[s, 0],
	[s / 2, (s * Math.sqrt(3)) / 2]
];
