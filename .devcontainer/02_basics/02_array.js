const marvel = ["Ironman","Spiderman","Thor"];
const dc = ["superman","batman","flash"];
//marvel.push(dc);
//console.log(marvel);
//console.log(marvel[3][1]);

//const newheros  = marvel.concat(dc);
//console.log(newheros);

const allheros = [...marvel, ...dc];
//console.log(allheros);

const another_arr = [1,2,3,[4,5,6],7,8,[9,[10,11]]];
//console.log(another_arr);

//console.log(another_arr.flat(Infinity));

console.log(Array.isArray("soham"));
console.log(Array.from("soham"));
console.log(Array.from({name:"soham"})); // returns empty array

let n1 =100;
let n2 = 200;
let n3 = 300;
console.log(Array.of(n1,n2,n3));

