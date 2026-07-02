"use strict";
// let names: string = "John Doe";
// let age: number = 25;
// let isStudent: boolean = true;
// let tags: string[] = ["typescript"];
// let anythiong: any = "This can be any type but avoid using it as much as possible";
// let unkownValue: unknown = "This can be any type but you need to check the type before using it";
console.log("Hello, TypeScript!");
function add(a, b) {
    return a + b;
}
console.log(add(5, 15));
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greet("John")); // "Hello, John!"
const user = {
    name: "Aditya",
    age: 25,
    address: "123 Main St",
    gender: "male"
};
console.log(user);
const person1 = {
    name: "Aditya",
    age: 25,
    address: "123 Main St"
};
console.log(person1);
const taskstatus = "in-progress";
