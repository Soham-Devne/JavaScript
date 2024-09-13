let myDate = new Date();
//console.log(myDate.toString());
/*
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(typeof myDate);*/

const newdate = new Date(2023,0,23);
//console.log(newdate.toString())

//let mycreateddate = new Date(2023,0,3,5,3);
let mycreateddate = new Date("2023-01-14");
//console.log(mycreateddate);
//console.log(mycreateddate.toDateString());

let myTimestamp = Date.now();
//console.log(myTimestamp);
//console.log(mycreateddate.getTime());
//console.log(Math.floor(mycreateddate.getTime()/1000));

console.log(myDate.getMonth());

console.log(myDate.toLocaleString('default',{
    weekday:"long"
}));
