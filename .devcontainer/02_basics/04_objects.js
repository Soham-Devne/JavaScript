//const user = new Object();
const user = {}
user.id = "123abc";
user.name = "Soham";
user.isLoggedin = false;

//console.log(user);
const anotheruser = {
    email:"sd@sd.com",
    fullname:{
        userfullname:{
            firstname:"Soham",
            lastname:"Devne",
        }
    }
}

//console.log(anotheruser.fullname.userfullname.firstname);

const obj1 ={
    1:"a",2:"b",
}
const obj2 = {
    3:"c",4:"d",
}
//const obj3={obj1,obj2}

//const obj3 = Object.assign(obj1,obj2)
//console.log(obj3);
//console.log(obj1);
// changes the target object

//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);
//console.log(obj1);
// does not change the original objects

//const obj3 = {...obj1,...obj2};
//console.log(obj3);
//spread operator


// Array of objects

const users = [
    {
        id:1,email:"sd@sd.com",
    },
    {
        id:1,email:"sd@sd.com",
    },
    {
        id:1,email:"sd@sd.com",
    }
]

//console.log(users[1].email);

//console.log(user);
//console.log(Object.keys(user));
//console.log(Object.values(user));
//console.log(Object.entries(user));

console.log(user.hasOwnProperty('isLogged'));
