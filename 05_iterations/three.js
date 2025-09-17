// for of 

// ["","",""] // strings inside array
// [ {} , {} , {}] // objects inside array

const arr = [ 1,2,3,4,5]

for (const num of arr) {    // object means kis chiz pe loop lagana hai
    console.log(num);
    
}

const greetings = "Hello World!"

for(const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}