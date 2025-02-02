/* Partie 1 : Prototypes
    1. Implémenter la fonction constructeur Shape
        Permettere à ce que l'attribut type soit modifiable seulement en changeant getType()
    2. Implémenter la fonction describe() qui affiche la couleur et la forme d'une Shape
*/
function Shape(type, color) {
    this.color = color;
    this.getType = function () { return type ? this.type : type }; // !! SYNTAX
}

// !! SYNTAX 
Shape.prototype.describe = function(){ return (this.color.toString() + " " + this.getType().toString());};

const circle = new Shape('circle', 'red');
const ellipse = Object.create(circle);
ellipse.type = 'ellipse';
console.log(ellipse.getType()); // valeur désirée : ellipse
console.log(ellipse.describe()); // valeur désirée : red ellipse

/* Partie 2 : Factory
    Implémenter RectangleFactory qui retourne un nouveau objet de type Object 
    qui contient tout ce que le paramètre obj contient déjà 
    ainsi que les propriétés width, height et la fonction getArea()
*/
function RectangleFactory(obj, width, height) {
    // !!
    return {
        ...obj, width, height, getArea: function() { return this.width * this.height }
    };
}

const rectangle = new Shape('square', 'blue');
const square = RectangleFactory(rectangle, 5, 5);
console.log(square.getType()); // square
console.log(square.getArea()); // 25


/* Partie 3 : Mixin
    Implémenter CircleMixin qui ajoute l'attribut radius et la fonction getArea() au paramètre obj
    Rappel : la surface d'un cercle = pi*r^2
*/
function CircleMixin(obj, radius) { 
    return Object.assign(obj, {
        radius, getArea: function() { return Math.PI * this.radius * this.radius}
    })
}

CircleMixin(circle, 1);
console.log(circle.getArea().toFixed(2)); // 3.14

/* Partie 4 : Chaîne de prototypes
    Le code suivant lance une erreur. Expliquez pourquoi ?
    Donnez 2 solutions possibles
*/
Shape.prototype.isBigger = function (otherObj) { return this.getArea() > otherObj.getArea() };

// square n'a pas le prototype shape, car on l'avait créé avec une fonction constructeur (??)
Object.setPrototypeOf(square, Shape.prototype); // !! SYNTAX
circle.isBigger(square);
square.isBigger(circle);

