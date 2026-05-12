
//type annotations
// let name:string; //declare then assign 
// name='Ritika';
// console.log(typeof name)
// console.log(`Name: ${name}`);

// let num:number = 45 
// console.log(typeof num)
// console.log(`Number: ${num}`);

//primitive types
// let s:string="hello"
// let b:boolean =true
// let n:number = 5
// let missing: undefined =undefined
// let nothing:null = null

//------literal types------
// let status :'done' | 'progress'
// console.log(status="done") //OK
// console.log(status='progress') //OK
// // console.log(status='No') //error

//it helps in function when the arguments must be of following categories and nothing else
// function allowFirstFiveNum(arg: 1|2|3|4|5);
// allowFirstFiveNum(1)
// allowFirstFiveNum(10)// error

//typed functions
// let add =(x:number,y:number) =>{
//     return x+y
// }
// console.log(add(2,4))
// add('hello',3) //error

// i can also specify the function return type , 
// which means say a function takes 2 numbers and return string output and so on.

// let addition = (x:number,y:number):string=>
// {
//     return (`${x} + ${y} is ${x+y}`)
// }
// console.log(addition(99,1))

// let mul =(x:number,y:number):number=>
//     {
//     return x*y;
// }
// console.log(mul(23,23))
//may not be doable for string parameters which return number

//typed arrays
// const digit : number[] =[1,2,3];
// digit.push(4);
// console.log(digit);

// const name: string[]=['name1','name2']
// name.push('name3');
// console.log(name);

//typed objects
// let user:{
//     name:string,
//     id:number
// }
// user={name:'rat',id:12}
// user.name='tar'
// user.id=21

// user.name=null //error
// user.id ='12'//error

//optional property
// let user : {name:string, id:number, email?:string}
// //email by default is undefined otherwise its a string
// user ={name:'ritika',id:34,email:'ritika@gmail.com'}
// //here email is optional property
// delete user.email //OK

//------any type------
//any type represents all possible JavaScript values 
// — primitives, objects, arrays, functions, errors, symbols 
// let value:any;
// value = true; // OK
// value = 42; // OK
// value = "Hello World"; // OK
// value = []; // OK
// value = {}; // OK
// value = Math.random; // OK
// value = null; // OK
// value = undefined; // OK
// value = new TypeError(); // OK
// value = Symbol("type"); // OK

//'any' is universal supertype of ts
// no protection from ts if we use 'any'
//it is not safe by default
//any gives run time error more, it doesn't check type of variable whereas unknown is type safe 

//------unknown type------
//just like all types are assignable to 'any' , all types are assignable to 'unknown'
// hence it is another top type of ts
// let value: unknown;

// value = true; // OK
// value = 42; // OK
// value = "Hello World"; // OK
// value = []; // OK
// value = {}; // OK
// value = Math.random; // OK
// value = null; // OK
// value = undefined; // OK
// value = new TypeError(); // OK
// value = Symbol("type"); // OK

//we dont know what of value is stored in value variable 
//so it can be only assign to another variable of unknown or any type

// let value1: unknown = value; // OK
// let value2: any = value; // OK
// let value3: boolean = value; // Error
// let value4: number = value; // Error
// let value5: string = value; // Error
// let value6: object = value; // Error
// let value7: any[] = value; // Error
// let value8: Function = value; // Error

//given function takes parameter which type is unknown , 
// returns void (as function is not returning anything)
//void returns no datatypes , its just that function is returning a console.log logging information
/* function calc(value:unknown): void {
    if(typeof value === 'number'){
        return console.log(`${value} is number`);
    }
    if(typeof value ==='bigint'){
        return console.log(`${value} is BigINT`);
    }
    if(typeof value==='string'){
        return console.log(`${value} is string`)
    }
    if(typeof value==='boolean'){
    return console.log(`${value} is boolean`)
    }
    return;
}
calc(2);
calc(2n);
calc('helloworld');
calc(true); */

//----- never type------
// Because TypeScript supports code flow analysis, the language
// needs to be able to represent when code logically cannot
// happen. For example, this function cannot return:

// const neverReturns = () => {
//   // If it throws on the first line
//   throw new Error("Always throws, never returns");
// };

// Having a function never return can be useful when dealing
// with the unpredictability of the JavaScript runtime and
// API consumers that might not be using types

// A never is something which is automatically removed from a type union.
// type NeverIsRemoved = string | never | number;

//------type alias, readonly------
/* const user={
    name:"Ritika",
    id:0
}
const car={
    type:"BMW"
}
const purchaseOrder ={
    owner: user,
    item : car,
}
console.log(purchaseOrder)
console.log(purchaseOrder.item.type)

//creating a type based on shape of purchaseorder
type PurchaseOrder = typeof purchaseOrder
//creates a readonly array of purchase orders
const readOnlyOrder :readonly PurchaseOrder[]=[purchaseOrder]
//readonly object does not support a mutation, once it is created then the contents of the array will always be the same
console.log(readOnlyOrder) */

// readOnlyOrder.pop(); //error

//------Union type-----
//type unions are a way of declaring that an object could be more than one type
// type StringorNumber= string | number;
// type states ="open"|"closed";
// type OddNumUnderTen= 1|3|5|7|9;
// type messyType = "hello"|1234 |{error:true};

//if union is an OR, then an intersection is an AND.
//intersection types are when two types intersect to create a new type

