//array

const myarr = [0,1,2,3,4,5]
//console.log(myarr[2]);
const heros = ["Shaktimaan","Naagraj"]
//console.log(heros[1]);
const myArr2 = new Array(1,2,33,11);
//console.log(myArr2);

// array methods
myArr2.push(66);
//console.log(myArr2);
myArr2.pop();
//console.log(myArr2);

myArr2.unshift(99);
//console.log(myArr2);

myArr2.shift();
//console.log(myArr2);

//console.log(myArr2.includes(9));
//console.log(myArr2.indexOf(9));

const newarr = myArr2.join();
//console.log(newarr);
//console.log(typeof newarr);


// slice , splice
console.log("A",myarr);
const myn1= myarr.slice(1,3);
console.log("B",myarr);
console.log(myn1);

const myn2= myarr.splice(1,3);
console.log("C",myarr);
console.log(myn2);


