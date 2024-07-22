// Travesting and Manipulation

// ---------- Exercise in Portuguese: ----------

// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const cloneMenu = menu.cloneNode(true);
const copy = document.querySelector(".copy");

copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector(".faq");
const primeiroDt = faq.querySelector("dt");

// Selecione o DD referente ao primeiro DT e depois remova ele
const primeiroDd = primeiroDt.nextElementSibling;
primeiroDd.remove();

// Substitua o conteúdo html de .faq pelo de .animais
faq.innerHTML = animais.innerHTML;
