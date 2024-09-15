function saymyname(){
    console.log("S");
console.log("O");
console.log("H");
console.log("A");
console.log("M");
}

//saymyname();

/*function addtwo(n1,n2){
    console.log(n1+n2);
    
}*/

//addtwo(3,null);

//const result = addtwo(3,5);

//console.log(result);

function addtwo(n1,n2){
   // let result = n1 + n2;
    //return result;
    return n1 + n2;
}

//console.log(addtwo(3,6));

function loginMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a name");
        return
    }
    return `${username} just logged in`;
}
//console.log(loginMessage());

// rest operator
function CalculateCartPrice(val1, val2, ...n1){
    return n1;
}

//console.log(CalculateCartPrice(200,300,400,500));

const user = {
    username:"hitesh",
    price:199,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
//console.log(handleObject(user));

const MynewArray = [200,300,400,500];

function Secondval(getarray){
    return getarray[1];
}
console.log(Secondval(MynewArray));
