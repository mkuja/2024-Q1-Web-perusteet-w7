import { Shape } from './Shape.js';

export class Circle extends Shape {
  #radius

  constructor(x, y, radius) {
    super(x, y)
    this.#radius = radius
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.strokeStyle = this._color
    ctx.arc(this._x, this._y, this.#radius, 0, 2*Math.PI)
    ctx.lineWidth = 2
    ctx.stroke()
  }
}
