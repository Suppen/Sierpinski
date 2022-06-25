import { equilateral } from "./Triangle";
import { x, y } from "./Point";
import { generator } from "./sierpinski";

const c = document.querySelector("canvas");
if (c === null) {
	throw new Error("No canvas found");
}

const triangle = equilateral(1000);
c.width = Math.ceil(x(triangle[1]));
c.height = Math.ceil(y(triangle[2]));

const ctx = c.getContext("2d");
if (ctx === null) {
	throw new Error("Could not create context");
}

// Paint the entire canvas white
ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, c.width, c.height);

// Set colors
ctx.strokeStyle = "#000";
ctx.fillStyle = "#000";

// Make points
const gen = generator(triangle, triangle[0]);
const drawPoint = () => {
	for (let i = 0; i < 10; i++) {
		const { value: point } = gen.next();
		ctx.fillRect(x(point), y(point), 1, 1);
	}

	requestAnimationFrame(drawPoint);
};
requestAnimationFrame(drawPoint);
