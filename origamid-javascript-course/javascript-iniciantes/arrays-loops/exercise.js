// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copas = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
copas.forEach(function (ano) {
  console.log(`O brasil ganhou a copa de ${ano}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
frutas.forEach(function (fruta) {
  if (fruta === "Pera") {
    console.log("Você encontrou a Pera com o forEach()");
  }
});

for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] === "Pera") {
    console.log("Você encontrou a Pera com o for()");
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultima = frutas[frutas.length - 1];
console.log(ultima);
