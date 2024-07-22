texto = 'Oláaa';
message(texto);

function message(texto) {
  console.log(texto);
}

let titulo = document.querySelector('h1');
titulo.addEventListener('click', () => {
  console.log('clicou no título');
});