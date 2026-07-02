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