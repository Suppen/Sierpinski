/** A 2D point. The first element is the x coord, the second is the y coord */
export type Point = [number, number];

/** Gets the X coordinate of a point */
export const x = (point: Point): Point[0] => point[0];

/** Gets the Y coordinate of a point */
export const y = (point: Point): Point[1] => point[1];
