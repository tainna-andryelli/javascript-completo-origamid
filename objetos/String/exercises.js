// Exercises in Portuguese: -------------------------------------------------
// Utilizando o foreach na array abaixo, some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((item) => {
  //valor = Number(item.valor.substring(3));
  valor = +item.valor.substring(3);

  if (item.descricao.startsWith("Taxa")) {
    taxaTotal += valor;
  } else {
    recebimentoTotal += valor;
  }
});

console.log(taxaTotal);
console.log(recebimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const array = transportes.split(";");

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split("span").join("a");

// Retorne o último caracter da frase
const frase = "Melhor do ano!";
const ultimoCaracter = frase.charAt(frase.length - 1);
ultimoCaracter; //!

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let totalTaxas = 0;
transacoes2.forEach((item) => {
  if (item.toLowerCase().includes("taxa")) {
    totalTaxas++;
  }
});

console.log(totalTaxas);
