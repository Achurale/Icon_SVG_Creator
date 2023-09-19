const {Circle, Square, Triangle} = require('./shapes')

describe('Circle', () => {
    test('Creating a circle using Circle!', () => {
        const circle = new Circle();
        circle.setColor('Blue');
        expect(circle.render()).toEqual(`<circle cx='50%' cy='50%' r='100' fill='${circle.getColor()}'/>`)
    })
})

describe('Square', () => {
    test('Making a square to beat all squares', () => {
        const square = new Square();
        square.setColor('Red');
        expect(square.render()).toEqual(`<rect x='75' y='50' height='180' width='180' fill='${square.getColor()}'/>`)
    })
})

describe('Triangle', () => {
    test('Rendering a triangle that is not [acute]ie', () => {
        const triangle = new Triangle();
        triangle.setColor('Green');
        expect(triangle.render()).toEqual(`<polygon points='150 10, 250 190, 50 190' fill='${triangle.color}'/>`)
    })
})