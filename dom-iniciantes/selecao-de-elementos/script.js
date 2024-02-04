// Elements Selection
const animalSection = document.getElementById("animais");

// getElementsByClassName is dinamic, returns a HTMLCOLLECTION
// querySelectorAll is static, returns a NODELIST
const ancoras = document.getElementsByClassName("ancora");
const ancs = document.querySelectorAll(".ancora");

// Exercises in Portuguese:
// Retorne no console todas as imagens do site
const imagens = document.getElementsByTagName("img");
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens2 = document.querySelectorAll('img[src ^= "../assets/imagem"]');
console.log(imagens2);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);

// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");
const ultimoParagrafo = paragrafos[paragrafos.length - 1];
console.log(ultimoParagrafo);
