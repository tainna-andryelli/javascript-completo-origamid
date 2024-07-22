// Events - element.addEventListener(event, function-callback, options)

const img = document.querySelector("img");

img.addEventListener("click", () => {
  console.log("Click");
});

// Good pratice:

function callback() {
  //console.log("You click here!");
}

img.addEventListener("click", callback); // 🚀
img.addEventListener("click", callback()); // undefined

// ---------- Exercises in Portuguese -----------
// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links
const internLinks = document.querySelectorAll('a[href^="#"]');

function addClass(event) {
  event.preventDefault();
  event.target.classList.toggle("ativo");
}

internLinks.forEach((link) => {
  //link.addEventLitstener("click", addClass);
});

// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados
const elements = document.querySelectorAll("body *");

function exibeElementoClicado(event) {
  // console.log(event.target);
}

elements.forEach((element) => {
  element.addEventListener("click", exibeElementoClicado);
});

// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento
function removeElementoClicado(event) {
  //event.target.remove();
}

elements.forEach((element) => {
  element.addEventListener("click", removeElementoClicado);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function aumentaTexto(event) {
  if (event.key === "t") {
    // falando diretamente com o html
    document.documentElement.classList.toggle("texto-maior");
  }
}

window.addEventListener("keydown", aumentaTexto);
