// Hoisting
// var x;
var degree = false;

if (degree) {
  console.log("It's true");
  var x = 5;
  let z = 5;
} else if (!degree) {
  console.log("It's else if");
  var y = 7;
} else {
  console.log("It's false");
}

console.log(x); // undefined
console.log(y); // -> 7
// console.log(z); -> error: z is not defined

// if exists
var nickname = ""; // false

if (nickname) {
  console.log(nickname + " exists");
} else {
  console.log("nickname doesn't exists");
}

// ---------------------------------------
/* Falsy:
if (0) or -0
if (NaN) 
if (null)
if (undefined)
if ('') or "" or ``

Truthy:
if (true)
if (1)
if (' ')
if ('justin')
if (-5)
if ({}) - Empty Object 

!! - you can use this for to verify the boolean value*/

// ---------------------------------------
// Logics Operators
// AND - if both values are true, returns the last check value. If any are false, it will return the first.
console.log(true && true); // true
console.log(true && false); // false
console.log("monkey" && "cat"); // cat
console.log("cat" && "monkey"); // monkey
console.log(5 - 5 && 5 + 5); // 0
console.log("cat" && false); // false
console.log(5 >= 5 && 3 < 6); // true

// OR - returns the first true value
console.log(true || true); // true
console.log(true || false); // true
console.log("python" || "javascript"); // python
console.log(5 - 5 || 5 + 5); // 10
console.log(5 <= 7 || 3 < 6); // true

// ---------------------------------------
// Switch / case
var favColor = "blue";

switch (favColor) {
  case "blue":
    console.log("Your favorite color is blue");
    break;
  case "red":
    console.log("Your favorite color is red");
    break;
  default:
    console.log("You don't have any favorite color.");
}
