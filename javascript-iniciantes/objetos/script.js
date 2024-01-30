var pessoa = {
  _name: "Juliana",
  _lastName: "Maira",
  _interests: ["Arquitetura", "Urbanismo"],
  talk() {
    return `Hi, my name is ${this._name} ${this._lastName}. My interests are ${this._interests[0]} and ${this._interests[1]}.`;
  },
};

console.log(pessoa.talk());
pessoa._lastName = "Ribeiro";
console.log(pessoa.talk());

// -------------------------------
// Everythinh is an Object

// A string data type inherits properties and methods from the String() constructor
var string = "Tainná";

string.length; // 6
string.charAt(1); // 'a'
var string2 = string.replace("ná", "ara"); // string2 = Tainara, string = Tainná

// DOM elements -> DOM is an object
var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  btn.classList.toggle("ative");
});

btn.innerText; // 'click'
