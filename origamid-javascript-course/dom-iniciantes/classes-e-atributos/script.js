// Classes and Attributes

// ------ Exercises in Portuguese ---------

// Adicione a classe ativo a todos os itens do menu
const itemsMenu = document.querySelectorAll(".menu a");
itemsMenu.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itemsMenu.forEach((item) => {
  if (item !== itemsMenu[0]) {
    item.classList.remove("ativo");
  }
});

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  if (img.hasAttribute("alt")) {
    console.log(`Image ${img.src} contains 'alt' attribute.`);
  }
});

// Modifique o href do link externo no menu
const externalLink = document.querySelector('a[href^="http"]');
externalLink.setAttribute("href", "https://linkedin.com/in/tainna");
