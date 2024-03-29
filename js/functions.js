import { Circle } from "./class/Circle.js";
import {Line} from "./class/Line.js";
import {Rectangle} from "./class/Rectangle.js";

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const x_input = document.querySelector('#x')
const y_input = document.querySelector('#y')
const draw_button = document.querySelector('button')
const radio_form = document.querySelector('form')
const colorInput = document.querySelector('input[type="color"]')
const lineWidthInput = document.querySelector('input[type="number"]')


const updateUI = (label3, label4) => {
    document.querySelector('div#third label').innerHTML = label3

    if (label4 !== undefined) {
        document.querySelector('div#fourth label').innerHTML = label4
        document.querySelector('div#fourth label').style.display = "inline-block"
        document.querySelector('div#fourth input').style.display = "inline-block"
    } else {
        document.querySelector('div#fourth input').style.display = "none"
        document.querySelector('div#fourth label').style.display = "none"
    }
}

radio_form.addEventListener('click', () => {
    const shape = radio_form["shape"].value

    switch (shape) {
        case 'line':
            updateUI('x2', 'y2')
            break
        case 'circle':
            updateUI('radius')
            break
        case 'rectangle':
            updateUI('width', 'height')
            break
        case 'square':
            updateUI('width')
            break
    }
})

draw_button.addEventListener('click', (e) => {
    const shape = radio_form["shape"].value

    switch (shape) {
        case 'circle':
            drawCircle()
            break
        case 'line':
            drawLine()
            break
        case 'rectangle':
            drawRectangle()
            break
        case 'square':
            drawSquare()
            break
    }
})

const drawCircle = () => {
    const radius = document.querySelector("div#third input").value
    const circle = new Circle(
        x_input.value,
        y_input.value,
        radius)
    circle.setColor(colorInput.value)
    circle.setLineWidth(lineWidthInput.value)
    circle.draw(ctx)
}

const drawLine = () => {
    const x1 = document.querySelector("div#third input").value
    const y1 = document.querySelector("div#fourth input").value
    const line = new Line(x_input.value, y_input.value, x1, y1)
    line.setColor(colorInput.value)
    line.setLineWidth(lineWidthInput.value)
    line.draw(ctx)
}

const drawRectangle = () => {
    const width = document.querySelector("div#third input").value
    const height = document.querySelector("div#fourth input").value
    const rectangle = new Rectangle(x_input.value, y_input.value, width, height)
    rectangle.setColor(colorInput.value)
    rectangle.setLineWidth(lineWidthInput.value)
    rectangle.draw(ctx)
}

const drawSquare = () => {
    const side = document.querySelector("div#third input").value
    const square = new Rectangle(x_input.value, y_input.value, side, side)
    square.setColor(colorInput.value)
    square.setLineWidth(lineWidthInput.value)
    square.draw(ctx)
}

console.log('Loaded functions.js')
