// Dimension and Distances

// ---------- Exercises in Portuguese -----------
// Verifique a distância da primeira imagem em relação ao topo da página
const firstImage = document.querySelector("img");
console.log(firstImage.offsetTop);

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll("img");
let sum = 0;

imgs.forEach((img) => {
  sum += img.offsetWidth;
});

console.log(sum);

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");
console.log(links);
links.forEach((link) => {
  const linkHeight = link.offsetHeight;
  const linkWidth = link.offsetWidth;

  if (linkHeight >= 48 && linkWidth >= 48) {
    console.log(link, "possui boa acessibilidade");
  } else {
    console.log(link, "não possui boa acessibilidade");
  }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const mobile = window.matchMedia("(max-width: 720px)");
const menu = document.querySelector(".menu");

if (mobile.matches) {
  menu.classList.add("menu-mobile");
}
