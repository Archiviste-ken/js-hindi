// var c = 300
let a = 300 //global scope
if (true){
    let a = 10
    const b = 20
    console.log("INNER: ", a);  // block scope  
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

console.log(a);
// console.log(b);
// console.log(c);  // c is getting printed even when is it within the if statement , indicates the scope issue.

// avoid the usage of var due to the obvious scope issue.


