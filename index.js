const inquirer = require('inquirer')
const fs = require('fs')
const {Circle, Square, Triangle} = require('./lib/shapes')

class SVG {
    constructor() {
        this.textElement = ''
        this.shapeElement =''
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="155" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
}

const questions = [
    {
        type:'input',
        name:'text',
        message: 'Enter up to three characters for your text',
    },
    {
        type:'input',
        name:'textCol',
        message: 'Enter a color for your text',
    },
    {
        type:'list',
        name:'shape',
        message: 'What shape do you want?',
        choices: ['triangle', 'square', 'circle']
    },
    {
        type:'input',
        name:'bgCol',
        message: 'Enter a color for your icon background',
    },
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err)
        }
        console.log('icon.svg has been created!')
    })
}

async function init () {
    try {
        var svgString = '';
        var textRes = '';

        const responses = await inquirer.prompt(questions);

        if (textRes.length < 4){
            textRes = responses.text;
        } else {
            console.log('Maximum number of characters is 3, please try again')
            return
        }
        console.log('Chosen Text: ' + textRes)

        textColRes = responses.textCol
        console.log('Chosen text color: ' + textColRes)

        shapeRes = responses.shape
        console.log('Chosen shape: ' + shapeRes)

        bgColRes = responses.bgCol
        console.log('Chosen background color: ' + bgColRes)


        console.log('Creating an icon.svg for you');

        const svg = new SVG();
        svg.setTextElement(textRes, textColRes);

        let userShape;
        if (shapeRes === 'circle') {
            userShape = new Circle();
        } else if (shapeRes === 'square') {
            userShape = new Square();
        } else if (shapeRes === 'triangle') {
            userShape = new Triangle();
        } else {
            console.log("Invalid Shape! Wait how when there's only three choices?")
            return;
        }
        userShape.setColor(bgColRes);
        svg.setShapeElement(userShape)

        svgString = svg.render();

        writeToFile('./icon.svg', svgString)
    } catch(error) {
        console.error('Error occurred:', error)
    }
}


init();