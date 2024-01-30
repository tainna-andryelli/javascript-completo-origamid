{
  var carro = "Fusca";
}

// Variables created with 'var' escape the block
// console.log(carro); -> "Fusca", but is a error, 'carro' is not defined.
// Use 'use strict' for to fix this.

// Using LET and CONST - respect the block

// EXERCISES IN PORTUGUESE: __________________________________________________

/* Por qual motivo o código abaixo retorna com erros?
  R: por que const e let respeitam o escopo de bloco, então marca e portas is not defined. Além disso, 'var' não é variável, e deve ser substituída por 'cor'
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(var, marca, portas);
*/

// Como corrigir o erro abaixo?
// R: Colocando 'dois' num escopo maior

const dois = 2;

function somarDois(x) {
  // const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
// R: no loop for(), usar let para declarar a variável, ao invés de var

var numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
