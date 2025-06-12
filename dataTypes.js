// Primitive data types => Immutable data types (cannot be changed after creation)


let name = "Elvis"; // String
let age = 20 // Number
let isStudent = true // Boolean
let height = null // Null -> Nothing or no value
let weight = undefined // Undefined


let b = 10
let a = b
a = 15
console.log(a)
console.log(b)


// Non Primitives => Mutable data types (can be changed after creation)
let colors = ['red', 'green', 'blue','yellow'] // Array
let person = {
    name:"John Doe",
    age:30,
    isStudent:false,
} // Object

let colors2 = colors;
console.log(colors2);

let today = new Date() // Date