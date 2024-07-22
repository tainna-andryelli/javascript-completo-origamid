// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: "Tainná",
  sobrenome: "Ribeiro",
  celular: "51 9999-9999",
  interesses: ["Desenvolvimento Web", "livros", "esportes"],
};

function mostraInteresses(interesse) {
  console.log(interesse);
}
console.log("Os interesses de " + dadosPessoais.nome + " são: ");
dadosPessoais.interesses.forEach(mostraInteresses);

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
  console.log(this.nome + " " + this.sobrenome);
};

dadosPessoais.nomeCompleto();

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "Labrador",
  pelo: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem" || pessoa === "Homem") {
      console.log("Late em homem.");
    } else {
      console.log("Nada");
    }
  },
};
