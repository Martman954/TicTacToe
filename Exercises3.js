//  111111111111111111111111111111111111111111111111111111111111111111
// Your code here.
class Point{
    #x;
    #y;
    constructor(x,y){
        this.#x = x;
        this.#y = y;
    }
    getX(){ return this.#x; }
    getY(){ return this.#y; }
    moveTo(x,y){
        this.#x = x;
        this.#y = y;
    }
    //  Both work
    //toString(){return `[${this.#x},${this.#y}]`}
    toString(){return "[" + this.getX() + "," + this.getY() + "]"} 
}
class Circle{
    #radius;
    #center;
    constructor(center, radius){
        this.#center = center;
        this.#radius = radius;
    }


    getCenterX(){return () => this.#center.getX()}
    getCenterY(){return () => this.#center.getY()}
    getRadius(){return this.#radius;}
    moveCenterTo(x,y){
        this.#center = new Point(x,y);
    }
    toString(){return `Circle(Center: ${this.#center.toString()}, Radius: ${this.getRadius()})`}
}
function createPoint(x,y){ return new Point(x,y); }
function createCircle(center,radius){ return new Circle(center,radius); }

console.log(createCircle(createPoint(1, 2), 4).toString())
// → Circle(Center: [1,2], Radius: 4)

//  222222222222222222222222222222222222222222222222222222222222222222222222222222222
// Your code here.

console.log(createCircle({ x: 2, y: 2, radius: 4 }).getCenterX())
// → 2
console.log(createCircle({ center: createPoint(2, 2), radius: 4 }).getCenterX())
// → 2