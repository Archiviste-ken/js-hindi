// var c = 300
let a = 300 //global scope
if (true){
    let a = 10
    const b = 20
    console.log("INNER: ", a);  // block scope  
}

//for (let i = 0; i < array.length; i++) {}
  //  const element = array[i];
    
//}

console.log(a);
// console.log(b);
// console.log(c);  // c is getting printed even when is it within the if statement , indicates the scope issue.

// avoid the usage of var due to the obvious scope issue.


function one(){
    const username ="hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    
    //console.log(website);

    two()
    
}

//one()

if(true){
    const username ="hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website);   
    
    } 
       //console.log(website);    // error due to scope limits
}
//console.log(username);  // error due to the scope limits


//++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++//

console.log(addone(5))

function addone(num){
    return num + 1
}


console.log(addTwo(5))               // hoisting

 const addTwo = function(num){
    return num + 2
 }



