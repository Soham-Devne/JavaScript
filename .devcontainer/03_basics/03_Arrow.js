const user ={
    username:"Soham",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} Welcome to website`);
       // console.log(this);
        
        

    }
}

//user.welcomeMessage();
//user.username = "Sam";
//user.welcomeMessage();
console.log(this);

/*function chai(){
    let username = "Soham"
    console.log(this.username);
    
}
chai()*/

/*const chai = function() {
    let username = "Soham"
    console.log(this.username);
    
}
chai()*/

/*const chai=()=> {
    let username = "Soham"
    console.log(this.username);
    
}
chai()*/

/*const addtwo=  (n1,n2)=>{
    return n1+n2
}*/

//const addtwo=  (n1,n2)=> n1+n2 

//const addtwo=  (n1,n2)=> (n1+n2) 

const addtwo=  (n1,n2)=> ({username:"Soham"})
console.log(addtwo(2,7));