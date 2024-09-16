//var c =300;
//global scope
let a = 100;
if (true) {// block scope
    let a =10;
const b =20;
 //c = 30;
    console.log("Inner: ",a);
    
}
console.log("Outer: ",a);
//console.log(a);
//console.log(b);
//console.log(c);