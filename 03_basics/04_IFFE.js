// Immediately Invoked Function Expressions (IFFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);    
})();

// chai ()
//  () ()

// IFFE is used to avoid the global scope pollution

( (name) =>  {
    console.log(`DB CONNECTED TWO ${name}`);
    
}

) (`hitesh`)
