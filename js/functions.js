import { Circle } from "./class/Circle.js";
import {Line} from "./class/Line.js";
import {Rectangle} from "./class/Rectangle.js";

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const x_input = document.querySelector('#x')
const y_input = document.querySelector('#y')
const draw_button = document.querySelector('button')
const radio_form = document.querySelector('form')


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
        case 'line':
            const x1 = document.querySelector("div#third input").value
            const y1 = document.querySelector("div#fourth input").value
            const line = new Line(x_input.value, y_input.value, x1, y1)
            line.draw(ctx)
            break
        case 'circle':
            const radius = document.querySelector("div#third input").value
            const circle = new Circle(
                x_input.value,
                y_input.value, 
                radius)
            circle.draw(ctx)
            break
        case 'rectangle':
            const width = document.querySelector("div#third input").value
            const height = document.querySelector("div#fourth input").value
            const rectangle = new Rectangle(x_input.value, y_input.value, width, height)
            rectangle.draw(ctx)
            break
        case 'square':
            const side = document.querySelector("div#third input").value
            const square = new Rectangle(x_input.value, y_input.value, side, side)
            square.draw(ctx)
            break
    }
})

console.log('Loaded functions.js')
