const myObject = {  
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift:"swift by apple"
}
// FOR IN LOOP => The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.
// for (const key in myObject) {  // will only show keys and not values
//     console.log(key);  
// }

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
        
}

const programming = ["cpp","js","java","python","rb"] // string in array

for (const key in programming) {
    // console.log(key);  only showing 0,1,2,3,4,5 index
    
}
for (const key in programming) {
    // console.log(programming[key]); // showing proper keys
}

const map = new Map()
map.set(`IN`,"India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set(`IN`,"India")

for (const key in map) {
    // console.log(key);
     
}