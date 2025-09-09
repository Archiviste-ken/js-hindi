// Objects can be created using the Object() constructor or the object initializer / literal syntax.

// Objects = It is used to store various keyed collections and more complex entities.

// singleton

// objects literals
//Object.create

const mySym = Symbol("Key1")

const JsUser = {
    name  : "Shreyesh",
    "full name" : "Shreyesh Pachpor"
    mySym: "mykey1",
    age  : 20,
    location : "Jaipur",
    email : "shreyesh@google.com",
    isloggedIn :false,
    lastLoginDays : ["Monday", "Saturday"]

    
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"]);
console.log(JsUser.mySym);


