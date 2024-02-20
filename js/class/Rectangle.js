import {Shape} from "./Shape.js";

export class Rectangle extends Shape {
    #width
    #height

    constructor(x, y, width, height) {
        super(x, y)
        this.#width = width
        this.#height = height
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.strokeStyle = this._color
        ctx.rect(this._x, this._y, this.#width, this.#height)
        ctx.lineWidth = 2
        ctx.stroke()
    }
}