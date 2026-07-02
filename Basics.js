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
console.log(taskstatus);
//arrays 
let numbers = [1, 2, 3, 4, 5];
let names = ["Aditya", "John", "Doe"];
console.log(numbers);
console.log(names);
//gernics
function identify(arg) {
    return arg;
}
const output1 = identify("Hello");
const output2 = identify(123);
console.log(output1);
console.log(output2);
// type assertion
let someValue = "This is a string";
let strLength = someValue.length;
console.log(strLength);
//enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
