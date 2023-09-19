class Shape{
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx='50%' cy='50%' r='100' fill='${this.color}'/>`
    }
}

class Square extends Shape{
    render(){
        return `<rect x='75' y='50' height='180' width='180' fill='${this.color}'/>`
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points='150 10, 250 190, 50 190' fill='${this.color}'/>`
    }
}

module.exports = {Circle, Square, Triangle}