//Generics
// hum eak function ko multiple types ke sath use kar sakte hai
function test<T>(a:T):T{
    console.log(a)
test<number>(123);


interface Halua<T>{
    name:string;
    age:number;
    key:T
}

function klm(obj:Halua<string>){
    console.log(obj);
}
klm({name:"Aditya",age:25,key:"Hello"});