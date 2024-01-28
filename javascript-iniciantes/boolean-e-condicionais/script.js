// Hoisting
// var x;
var degree = false;

if (degree) {
  console.log("It's true");
  var x = 5;
  let z = 5;
} else {
  console.log("It's false");
  var y = 7;
}

console.log(x); // undefined
console.log(y); // 7
// console.log(z); -> error: z is not defined
