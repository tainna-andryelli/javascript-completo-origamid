var x = 5;
var y = 10;

x += y; // x = x + y (10)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (5^10)

// Ternary Operator -> (Condition) ? true : false
var idade = 21;
var podeBeber = idade >= 18 ? "Pode beber." : "Não pode beber.";
console.log(podeBeber);

// Exercises
// 1
var scroll = 1000;
scroll += 500;

// 2
var haveCar = true;
var haveHouse = true;
var giveCredit = haveCar && haveHouse;
console.log(giveCredit);
