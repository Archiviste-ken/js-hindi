const marvel_heroes = ["thor","Ironman","spiderman"]
const dc_heroes = ["superman", "flash" , "batman"]

//marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]);

// const allHeroes = marvel_heroes.concat(dc_heroes) //concatenation of arrays in js
// console.log(allHeroes);

// so hence it is clear as a day that push and concatenation gives same output.

const all_new_heroes = [...marvel_heroes, ...dc_heroes]  // much more easy method than concat called spread operator ,,,, glass  breaking example by hitesh sir.
//console.log(all_new_heroes);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]] // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth i.e, Flat.

//Flat method = Array.prototype.flat()

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Shreyesh")) //check  whether a string is array or not. The Array.isArray() static method determines whether the passed value is an Array

console.log(Array.from("Shreyesh")) // create the desired string into an array. The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.


console.log(Array.from({name : "Shreyesh"})) // interesting.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // creates an array
//The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.







