// Números:
var goals = 10;
var phi = 3.14;
var zeros = 2e5; // -> 200000, max 15 digits

// Arithmetic Operators:
var addition = 2 + 2;
var subtraction = 2 - 2;
var multiplication = 2 * 2;
var division = 2 / 2;
var exponent = 2 ** 5; // -> 32
var modulus = 14 % 5; // -> 5 (resto da divisão)

// Operators in Strings
var sum = "100" + 20; // 10020, concatenate
var sub = "100" - 20; // 80, JS is trying to convert String in Number
var mult = "2" * "4"; // 8
var div = "isso é 10" / 2; // NaN (Not a Number) - it is possible to check whether a variable is NaN or not with isNaN() function, this function returns false if is a Number

// Unary Arithmetic Operators
var x = 5;
x++; // 5
x; // 6

var y = 5;
++y; // 6
y; // 6

// + and - try converting String into Number
var age = "20";
var age2 = +"20"; // this age is a Number
var sumAge = 5;

console.log(age - sumAge); // 15
console.log(age + sumAge); // 205
console.log(-age + 4 * sumAge); // 0
