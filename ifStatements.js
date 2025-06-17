let age = 22;
if (age <= 17 && age >= 1) {
  console.log("Welcome to the party🥳🥳");
} else {
  console.log("Sorry, you are still a minor 😔.");
}

// Checking for multiple conditions
let driverAge = 25;
let hasLicense = true;
let hasCar = true;

if (driverAge >= 18 && hasLicense) {
  console.log("You can drive the car.");
} else if (hasLicense && !hasCar) {
  console.log("Hire a car to drive.");
} else if (!hasLicense && driverAge < 18) {
  console.log("You are too young to drive and you don't have a license.");
} else if (!hasLicense && driverAge >= 18) {
  console.log("Go get a license to drive.");
} else {
  console.log("You cannot drive the car.");
}


// Example two
let user = {
  role:'editor',
  isLoggedIn:true,
  isPremiumMember: false,
  accountBalance:150,
  subscriptionExpired:false,
}
if(user.isLoggedIn && user.role === 'admin'){
  console.log("Welcome Admin! You have full access to the system.");
} else if(user.isLoggedIn && user.role === 'editor'){
  console.log("Welcome Editor! You can edit content but not manage users.");
} else if(user.isLoggedIn && !user.subscriptionExpired){
  console.log("Welcome User! You can view content. Subscription is active.");
} else if(!user.isLoggedIn){
  console.log("Please log in to access your account.");
} else{
  console.log("Access Denied! Your subscription has expired. Please renew to continue.");
}