import { Shape } from "./Shape.js";

export class Line extends Shape {
    #x1
    #y1

    constructor(x0, y0, x1, y1) {
        super(x0, y0);
        this.#x1 = x1
        this.#y1 = y1
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.moveTo(this._x, this._y)
        ctx.lineTo(this.#x1, this.#y1)
        ctx.stroke()
    }
}