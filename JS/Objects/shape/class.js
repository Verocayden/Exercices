class Shape {
    // le type ne devrait pas être modifiable hors de la classe
    #type;
    constructor(type, color) { 
        this.color = color;
        this.#type = type;
        
    }
    getType() { return this.#type; };
    describe() { return `${this.#type} ${this.color}` };
}

class Circle extends Shape{ 
    constructor(type, color, radius) {
        super(type, color);
        this.radius = radius;
    }
    getArea() { return Math.PI * this.radius * this.radius }
}
const circle = new Circle('circle', 'red', 1);
console.log(circle.getType()); // circle
console.log(circle.getArea().toFixed(2)); // 3.14

class Rectangle extends Shape { 
    constructor(type, color, width, height) {
        super(type, color);
        this.width = width;
        this.height = height;
    }
    getArea() { return this.width * this.height };
}
const rectangle = new Rectangle('rectangle', 'green', 2, 10);
console.log(rectangle.describe()); // green rectangle
console.log(rectangle.getArea()); // 20

class Square extends Shape { 
    constructor(type, color, side) {
        super(type, color);
        this.side = side;
    }
    getArea() { return this.side * this.side };
}
const square = new Square('square', 'blue', 5);
console.log(square.describe()); // blue square
console.log(square.getArea()); // 25