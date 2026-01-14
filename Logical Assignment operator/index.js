// compound logical assignment operators introduced in JavaScript (ES2021)

// 1. &&= (Logical AND assignment)
 
// x &&= y;

// Meaning:
// If x is truthy, assign y to x.
// If x is falsy, do nothing (keep the original value).


// 2. ||= (Logical OR assignment)

// x ||= y;

// Meaning:
// If x is falsy, assign y to x.
// If x is truthy, do nothing.

// 3. ??= (Nullish coalescing assignment)

// x ??= y;

// Meaning:
// If x is null or undefined, assign y to x.
// Otherwise, keep the original value.














// let user = { name: "Alice", active: true };

// user.active &&= false;   
// console.log(user.active);  

// user.active &&= true;   
// console.log(user.active);   









// let name = "Sufyan";
// name ||= "Guest";   
// console.log(name);   

// name ||= "Another";   
// console.log(name);   








// If age is null or undefined → assign 18
let age = null;
age ??= 18;   
console.log(age);   

age ??= 25;   
console.log(age); 




 
