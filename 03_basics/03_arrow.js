const user = {    // this thing is known as object.
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},  welcome to website`);   // (this) keyword is used for current context,it helps to access the variable from the current context.
        console.log(this);
        
        
    }

}

 //user.welcomeMessage()
 //user.username = "sam"  // current context/value got changed here.
 //actually the username in previous context is not hard coded that's why we can change it outside of the previous conntext.
 //user.welcomeMessage()

//  console.log(this);

// function one(){
//      let username = "hitesh"
//     console.log(this.username;  //  this is only working in objects and not in functions.    
// }

// one()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);    
// }

const chai = () => {             //   ARROW
    let username = "hitesh"
    console.log(this);    
}

//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// if we use curly braces then we gotta use return
// explicit return

// const addTwo = (num1, num2) =>  num1 + num2   // implicit  return
// const addTwo = (num1, num2) =>  (num1 + num2)   // implicit  return
// if we use parenthesis then no need to use return

const addTwo = (num1, num2) =>  ({username: "shreyesh"})

console.log(addTwo(3, 4));


// const myArray = [2,,5,3.8]

// myArray.forEach (() => ())

