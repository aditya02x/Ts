function abcdef(name: string) {
    console.log(`Hello, ${name}`);
}


//optional parameters
function info(name:string , age:number ,gender: string="not specified") {
    console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
}
info("aditya",25,"male");
info("test",30); // Uses the default gender value

// ...rest parameters

function sum(...arr: number[]) {
    console.log(arr);
}
sum(1,2,3,4,5); // [1, 2, 3, 4, 5]

//overloading

function abcde(a:string ):void;
function abcde(a:number):void;

function abcde(a: any): void {
    if (typeof a === "string") {
        console.log(`String: ${a}`);
    } else if (typeof a === "number") {
        console.log(`Number: ${a}`);
    }
}

abcde("Hello");
abcde(42);