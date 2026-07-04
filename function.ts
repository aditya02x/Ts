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