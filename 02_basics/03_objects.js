// Objects can be created using the Object() constructor or the object initializer / literal syntax.

// Objects = It is used to store various keyed collections and more complex entities.

// singleton

// objects literals
//Object.create // constructor(singleton``)

const mySym = Symbol("Key1")  //symbol is a data type

const JsUser = {
    name  : "Shreyesh", // key : "value"  // key gets treated as a string.
    "full name" : "Shreyesh Pachpor" , //  you cannot ever access this value by the dot method
    [mySym]: "mykey1",  // still it can't be used as a data type but like a property of string.
        // to use it like a string put it in square brackets
    age  : 20,
    location : "Jaipur",
    email : "shreyesh@google.com",
    isloggedIn :false,
    lastLoginDays : ["Monday", "Saturday"]
    
}

console.log(JsUser.email)
console.log(JsUser["full name"]); // the js intellicence also suggests this way to access full name
console.log(JsUser["email"])
//console.log(JsUser.mySym);
//console.log(typeof JsUser.mySym); // acting like a string.
console.log(typeof JsUser[mySym]);

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser.email);
// console.log(JsUser);

JsUser.greeting = function(){

    console.log("Hello Js User");
    
}
JsUser.greetingtwoo = function(){

    console.log(`Hello Js User,${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwoo());


// Final note to access the values always use dot(.)
// their are cases where we have use square brackets like for example in symbol.

// Peace :)









