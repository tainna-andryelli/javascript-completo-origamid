// Exercises in Portuguese:

// Transforme o objeto abaixo em uma Constructor Function
/*const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};*/

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + " andou");
  };
}

// Crie 3 pessoas, João - 20 anos, Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);
joao.andar();

// Crie uma Constructor Function (Dom) para manipulação de listas de elementos do dom. Deve conter as seguintes propriedades e métodos: elements que retorna NodeList com os elementos selecionados, addClass(classe) que adiciona a classe a todos os elemento, removeClass(classe) que remove a classe a todos os elementos
function Dom(seletor) {
  const elements = document.querySelectorAll(seletor);

  this.elements = elements;
  this.addClass = function (classe) {
    this.elements.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    this.elements.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}

const lista = new Dom("li");
lista.addClass("active");
//lista.removeClass("active");
