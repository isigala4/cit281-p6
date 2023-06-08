class Shape{
    constructor(sides=[]){
        this.sides=sides;
    }
 perimeter =() => this.sides.length > 0 ? this.sides.reduce((sum, side) => sum + side) : 0; 
   }
class Rectangle extends Shape{
    constructor(length= 0, width= 0 ){
        super([length, width, length, width]);
        this.length=length;
        this.width=width;
    }
area1 =() => this.sides.length >0 ? this.width * this.length : 0;
}
class Triangle extends Shape{
    constructor(sideA =0, sideB =0, sideC =0){
    super([sideA, sideB, sideC]);
    this.sideA= sideA;
    this.sideB=sideB;
    this.sideC=sideC;
    }
area =() => {

     const s = (this.sideA +this.sideB + this.sideC)/2;
 return Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC)) || 0;  
};
}

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

for(const sides of data){
let shape = null;

const arrayToString= sides.join(", ");
switch (sides.length){
case 2:
    if(sides[0]=== sides[1]){
shape = new Rectangle(...sides);
console.log(`Square with sides ${arrayToString} has perimeter of ${shape.perimeter()} and area of ${shape.area1()}`);
    }else {
        shape = new Rectangle(...sides);
        console.log(`Rectangle with sides ${arrayToString} has perimeter of ${shape.perimeter()} and area of ${shape.area1()}`);
    }
    break;

case 3:
  shape =  new Triangle(...sides); 
console.log(`Triangle with sides ${arrayToString} has perimeter of ${shape.perimeter()} and area of ${shape.area()}`);
break;

default:
if(sides===1){
    console.log(`Shape with ${sides.length} side is unsupported`);
}else{
    console.log(`Shape with ${sides.length} sides is unsupported`)
}}
}

console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0
console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area1());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area1()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area1()); // 0
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0