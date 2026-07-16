"use strict";
function abcdef(name) {
    console.log(`Hello, ${name}`);
}
//optional parameters
info("test", 30); // Uses the default gender value
// ...rest parameters
function sum(...arr) {
    console.log(arr);
}
sum(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
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
