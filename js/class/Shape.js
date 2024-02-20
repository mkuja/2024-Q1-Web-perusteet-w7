export class Shape {
    _x
    _y
    _color
    _lineWidth

    constructor(x, y) {
        this._x = x
        this._y = y
    }

    setLineWidth(width) {
        this._lineWidth = width
    }

    setColor(color) {
        this._color = color
    }
}
