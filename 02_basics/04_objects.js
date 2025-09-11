//const tinderUser = new Object() // SINGLETON
const tinderUser ={} // same output as above // NON SINGLETON

tinderUser.id = "123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:  {
        userfullname:{
            firstname: "shreyesh",
            lastname: "pachpor"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"} 
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"} 


// const obj3 ={ obj1, obj2   }
// const obj3 = Object.assign({},obj1,obj2,obj4) //The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const obj3 = {...obj1,...obj2,...obj4}  // spread operator is latest and more preferable to use.

// console.log(obj3);


const users = [
    {
        id: 1,
        email:" h@gamil.com"
    },
     {
        id: 1,
        email:" h@gamil.com"
    },
     {
        id: 1,
        email:" h@gamil.com"
    },
 {
        id: 1,
        email:" h@gamil.com"
    },


]
console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));






