// LOGICAL OPERATORS
// THEY RETURN A BOOLEAN VALUE

// LOGICAL AND (&&)
let a = '15'
let b = 22
let c = 10
let d = 15

//console.log(a < b && c < d); // true
//console.log(a != b && c <= d) // false
//console.log(a <= d && c > b) // false

// LOGICAL OR (||)
const username = null
const age = 25
const displayName = username || 'Guest'

//console.log(displayName);
let z = 0
let w = 5
//console.log(z || w)

/* 

FALSY VALUES:
0
null
undefined
NaN
"" (empty string)
false
*/

const userTheme = null;
const theme = userTheme || 'light';
//console.log(theme);



const userProfilePicture = '';
const profilePicture = userProfilePicture || 'https://i.pinimg.com/736x/cd/4b/d9/cd4bd9b0ea2807611ba3a67c331bff0b.jpg';

//console.log(profilePicture);


// LOGICAL NOT (!) => Inverts the truthiness of a value (Negation)
const j = 2
const k = 3
//console.log(!(j < k))

const isLoggedIn = true;
const isLoggedOut = !isLoggedIn;
//console.log(isLoggedOut)


const isAdmin = true;
if(!isAdmin){
    console.log("Access Denied: You are not an admin.");
} else{
    console.log("Access Granted: Welcome, Admin!");
}

const email = null
const password = 'pass@1234'

if(!email || !password){
    console.log("All fields required when logging in!")
} else{
    console.log("Login Successful")
}