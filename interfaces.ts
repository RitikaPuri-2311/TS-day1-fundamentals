// interface Point{
//     x:number;
//     y:number;
//  }
// interface SetPoint {
//     (x:number,y:number):void;
// }
// const a:SetPoint=(x:number,y:number)=>{
// console.log(`(X,Y): (${x},${y})`)
// }
// console.log(a(2,3))

// type Point ={
//     X:number,
//     Y:number
// }
// type Setpoint =(x:number,y:number)=>void;


// interface PointX ={x:number}
// interface Point extends PointX {y:number}
// const Point:Point={x:3,y:4}
// console.log(Point)

// type PointX={x:number}
// type Point =PointX & {y:number} // extending using type ,even though type is closed declaration
// const b:Point ={x:2,y:4}
// console.log(b)

// interface POint { x:number }
// interface POint {y:number} // redeclaring same point interface and adding y coordinate
// const c:POint={x:3,y:5}
// console.log(c)
//An interface can have multiple merged declarations, but a type alias for an object type literal cannot



 /* interface Animal {
    name: string;
    eat(): void;
}

interface Bird extends Animal {
    fly(): void;
}

interface Fish extends Animal {
    swim(): void;
}

const bird: Bird = {
    name: 'Eagle',
    eat() {
        console.log('Eating fish');
    },
    fly() {
        console.log('Flying high');
    }
};

const fish: Fish = {
    name: 'Salmon',
    eat() {
        console.log('Eating plankton');
    },
    swim() {
        console.log('Swimming fast');
    }
};

console.log(bird.name)
console.log(bird.eat())
console.log(bird.fly())
console.log(fish.name)
console.log(fish.eat())
console.log(fish.swim()) */

/*
interface shape{
    color?:string;
    width:number;
}
interface rectangle extends shape {
    height:number;
    area():number
}
interface square extends shape {
    area():number
}
const rec:rectangle = {
    width:5,
    height:10,
    area() {
        return (2*this.width*this.height)
    }
}
console.log(`Area of rectangle : ${rec.area()}`)

const sqr:square ={
    width:10,
    area(){
        return (this.width*this.width)
    }
}
console.log(`Area of Square : ${sqr.area()}`) */

// interface point {
//     readonly x:number
//     readonly y:number
// }
// let p1:point ={x:10,y:2}
// p1.x=3 //error

/**Always prefer interface over type
 *** when to use type?
 Use type when defining an alias for primitive types
 use type when defining tuple type
                                    type row =[colOne:number,colTwo:string]
 use type when defining union
 use type when defining function types
 use type when trying to overload function in object types via composition
 use type when needing to take advantage of mapped types

 *** when to use interface
 use interface for all object types where type is not required
 use interface when you want to take advantage of declaration merging
 */

 