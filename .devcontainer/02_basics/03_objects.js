// singleton
// Object.create
// onject literals


const mySym = Symbol("key1")
const jsUser = {
    name:"Soham",
    "full name":"Soham Ganesh Devne",
    [mySym]:"Mykey1",
    age:20,
    location:"Pune",
    email:"sd@sd.com",
    isLoggedin:false,
    lastLoginDays:["Monday","Thursday"],
}

//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser["full name"]);
//console.log(typeof jsUser[mySym]);

jsUser.email = "Sd@google.com";
//Object.freeze(jsUser);
jsUser.email = "Sd@microsoft.com";
//console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS User");
}

//console.log(jsUser.greeting);
//console.log(jsUser.greeting());

jsUser.greetingtwo = function(){
    console.log(`Hello JS User, ${this["full name"]}`);
} 
console.log(jsUser.greetingtwo);
console.log(jsUser.greetingtwo());