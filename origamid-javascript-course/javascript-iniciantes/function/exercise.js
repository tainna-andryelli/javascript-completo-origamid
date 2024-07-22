// Crie uma função para verificar se um valor é Truthy
var value = 5 * 5;
function isTruthy1(value) {
  if (value) {
    return "Is Truthy.";
  }
}

function isTruthy2(value) {
  if (!!value === true) {
    return "Is Truthy.";
  }
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log("O perímetro do quadrado de lado 2 é: " + perimetroQuadrado(2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
}
console.log(nomeCompleto("Tainná", "Ribeiro"));

// Crie uma função que verifica se um número é par
function verificaParidade(number) {
  if (number % 2 === 0) {
    console.log("É par.");
  } else {
    console.log("É ímpar.");
  }
}
verificaParidade(13); // É ímpar.

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function dataType(data) {
  return typeof data;
}
console.log(dataType(5 > 7 || 7 > 5));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener("click", function () {
  console.log("Tainná Andryelli Ribeiro");
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));