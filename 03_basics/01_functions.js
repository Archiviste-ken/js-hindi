// The Function object provides methods for functions. In JavaScript, every function is actually a Function object.
// Funtion() = Creates a new Function object. Calling the constructor directly can create functions dynamically but suffers from security and similar (but far less significant) performance issues to eval(). However, unlike eval(), the Function constructor creates functions that execute in the global scope only.
//Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.

function sayMyname(){         


console.log("h");
console.log("i");
console.log("t");
console.log("e");
console.log("s");
console.log("h");
}

// sayMyname()

// function addTwoNumbers(number1,number2){

//     console.log(number1  + number2)
// }
function addTwoNumbers(number1,number2){

//   let  result = number1 + number2
// //   console.log(number1  + number2)
//   return result // return ends the funtion, so we can't access anything written after return.
return number1 + number2
}

const result = addTwoNumbers(3 , 5)

// console.log("Result: ", result); // printing by console does'nt means it also returns the value too, this explain the undefined output.
// return is itself a concept while console is just used to print things.

// we can only store the value of return in a variable from a function and not console.

// function loginUserMessage(username){
//     if (username === undefined) {        // runs when the condition evaluates as true.
//         console.log("Please enter a username");
//         return        
//     }
    function loginUserMessage(username = "sam"){
    if (!username) {        // runs when the condition evaluates as true.
        console.log("Please enter a username");
        return        
    }

// == = "loose equality" , it only checks the value of the comparable things and not the data type.
//=== = "strict equality" ,  it strictly checks both the values and type (datatype) if both condition fulfills the output is true or else false.

// actually "", undefined in js is taken as false value so if we put them in the if condition then if will not execute further since value is false that's why we use === or  ! to make the condition true.
//!undefined will make the false value true since it's a boolean expression and will execute if statement further.
    // if ("") {        
    //     console.log("Please enter a username");
    //     return        
    // }
    // if (!username) {        
    //     console.log("Please enter a username");
    //     return        
    // }
    // if (undefined) {        
    //     console.log("Please enter a username");
    //     return        
    // }
    return `${username} just logged in`
}

// const Return = loginUserMessage("hitesh")

// console.log("Return: ", return);


  console.log(loginUserMessage("hitesh"));
