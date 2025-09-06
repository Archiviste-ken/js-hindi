// # Primitive 

// 7 types : String , Number ,Boolean ,Null ,undefined ,Symbol , BIGInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id ===anotherID);

// const bigNumber =4167642367624652624642n 



// reference (non primitive)

//Array , Objects , Functions 

const heros = ["shaktiman" , "naagraj" , "doga"]

let myObj ={

    name: "shreyesh",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
    
}

console.log(typeof bigNumber);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-Prmitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename //  myYoutubename  ki ek copy assign hui hai anothername ko

anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",           //heap mai direcct reference milta hai unlike stack jo original ka copy assign krta hai
    upi: "user@ybl"
}

let userTwo = userOne  

userTwo.email = "hitesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);            // same reference example. the email gets changed of other too by another one change








    

