// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


const scor =100;
const isLoggedin = false;
let useremail;

const id = Symbol('123');
const anotherid = Symbol('123');
//console.log(id==anotherid);

const bigNumber = 3658n;
//console.log(typeof bigNumber);

// Reference (Non primitve)
// Array, Objects, Functions

const heros = ["shaktiman","nagraj","doga"]
//console.log(typeof heros);

let myobj ={
    name:"hitesh",
    age:18,
}
//console.log(typeof myobj);


const myfun =function(){
    console.log("Hello world");
}
//console.log(typeof myfun);




//++++++++++++++++++++++++++++++++++++++++++++++

// Stack -> Primitive, Heap -> Non-Primitive

let myname ="Soham";

let anothername = myname;
anothername ="Sahil";
console.log(myname);
console.log(anothername);

let user1={
    email:"Sd@sd.com",
    upi:"gpay",
}

let user2 = user1;
console.log(user1);
console.log(user2);
user1.upi="phonepay";
console.log(user1);
console.log(user2);

