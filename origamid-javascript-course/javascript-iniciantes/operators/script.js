// Numbers:
var goals = 10;
var phi = 3.14;
var zeros = 2e20; // max

// Arithmetic Operators:
var addition = 2 + 2;
var subtraction = 2 - 2;
var multiplication = 2 * 2;
var division = 2 / 2;
var exponent = 2 ** 5; // -> 32
var modulus = 14 % 5; // -> 5

// Arithmetic Operators in Strings
var sum = "100" + 20; // 10020, concatenate
var sub = "100" - 20; // 80, JS is trying to convert String in Number
var mult = "2" * "4"; // 8
var div = "isso é 10" / 2; 
// NaN (Not a Number) - it is possible to check whether a variable is NaN or not with isNaN() function, this function returns false if is a Number

// Unary Arithmetic Operators
var x = 5;
x++; // 5
x; // 6

var y = 5;
++y; // 6
y; // 6

// + and - try converting String into Number
var age = "20";
var age2 = +"20"; // this age is a Number, typeof -> number
var sumAge = 5;

isNaN("2"); // false, is a number
isNaN("sunday"); // true