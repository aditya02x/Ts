"use strict";
function abcdef(name) {
    console.log(`Hello, ${name}`);
}
//optional parameters
function info(name, age, gender = "not specified") {
    console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
}
info("aditya", 25, "male");
info("test", 30); // Uses the default gend
function abcde(a) {
    if (typeof a === "string") {
        console.log(`String: ${a}`);
    }
    else if (typeof a === "number") {
        console.log(`Number: ${a}`);
    }
}
abcde("Hello");
abcde(42);
