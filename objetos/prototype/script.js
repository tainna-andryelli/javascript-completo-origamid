console.log(Array.prototype);

function test() {
  return 1;
}

// console.log(typeof test.prototype);

function Person(name, age) {
  (this.name = name), (this.age = age);
}

const tainna = new Person("Tainná", 20);

Person.prototype; // returns the object prototype
tainna.prototype; // undefined

// Native Constructors
const pais = "Brasil";
const cidade = new String("Rio");

// -----------------------------------------------------------
// Exercises in Portuguese:

// Crie uma função construtora de Pessoas. Deve conter nome, sobrenome e idade. Crie um método no protótipo que retorne o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

// Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li.constructor.name; // -> HTMLLIElement
li.click; // -> Function
li.innerText; // -> String
li.value; // -> Number
li.hidden; // -> Boolean
li.offsetLeft; // -> Number
li.click(); // -> error - undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;

li.hidden.constructor.name.constructor.name; // -> String
