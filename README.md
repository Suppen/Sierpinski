Sierpinski Triangle generator using an iterative process of drawing points. Available on [suppen.no](https://suppen.no/sierpinski)

Start with the three corners of a triangle. Pick a random point within the triangle and call it `p`. I'm using one of the corners for simplicity. Then do the following:
* Pick a random corner, `c`
* Draw a point at the halfway point between `p` and `c`. Let this new point be `p`
* Repeat forever
