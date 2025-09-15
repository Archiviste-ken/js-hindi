const userEmail = []

if (userEmail){
    console.log("Got user Email");
} else {
    console.log("Don't have user Email");
    
}

// falsy values

// false,0, -0 ,BigInt 0n ,"",null,undefined

// TRUTHY VALUES

// "0" ,'false'," ",[] ,{} , function(){}

// if (userEmail.lenght === 0) {
//     console.log("Array is empty");    
// }


const emptyObj = {}

if(Object.keys(emptyObj).length ===0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
value1 = nurs


console.log(val1);
