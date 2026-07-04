// let names: string = "John Doe";
// let age: number = 25;
// let isStudent: boolean = true;
// let tags: string[] = ["typescript"];
// let anythiong: any = "This can be any type but avoid using it as much as possible";
// let unkownValue: unknown = "This can be any type but you need to check the type before using it";

console.log("Hello, TypeScript!");


function add(a:number ,b:number): number {
    return a + b;
}
console.log(add(5,15));

function greet(name:string ,greeting:string = "Hello"):string {
    return`${greeting}, ${name}!`;
}

console.log(greet("John")); // "Hello, John!"


interface User {
    name:string,
    age:number,
    address?: string // optional property
    gender: "male" | "female"
}

const user :User ={
    name:"Aditya",
    age: 25,
    address: "123 Main St",
    gender:"male"
}
console.log(user);

// type is the another alternative of the interface
type person ={
    name:string,
    age:number,
    address?: string // optional property
}

const person1 :person ={
    name:"Aditya",
    age: 25,
    address: "123 Main St"
}
console.log(person1);

//litreal unions
type Status = "done" | "pending" | "in-progress";
const taskstatus :Status = "in-progress";
console.log(taskstatus);


//arrays 

let numbers:number[] = [1,2,3,4,5];
let names:string[] = ["Aditya","John","Doe"];
console.log(numbers);
console.log(names);


//gernics
function identify<T>(arg:T):T{
    return arg;
}

const output1 = identify<string>("Hello");
const output2 = identify<number>(123);
console.log(output1);
console.log(output2);

// type assertion
let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;
console.log(strLength);

//enums
enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green;
console.log(c);

//class
class Person {
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

let p1 = new Person("Aditya", 25);
console.log(p1);



// function and types

function abcd(name:string ,cb:(name:string)=>void):void{ //void means the function does not return anything
   console.log(`Hello, ${name}`);
}