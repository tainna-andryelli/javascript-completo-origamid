var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // true && true && true = false

var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //undefined - false
var dinheiroNaConta = 0; //false

var brasil = 207;
var china = 1340;

if(brasil > china) {
  var diferenca = brasil - china;
  console.log(`Brasil tem ${diferenca} milhões habitantes a mais que a China.`);
} else {
  var diferenca = china - brasil;
  // console.log(`China tem ${diferenca} milhões habitantes a mais que a Brasil.`);
}

if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

//O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); // Cão
} else {
  console.log('Falso');   
}