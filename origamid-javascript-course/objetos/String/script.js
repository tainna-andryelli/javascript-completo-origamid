const phrase = "Hello, ";
const world = "world";
// const phraseFinal = phrase + world;
const phraseFinal = phrase.concat(world, "!"); // Hello, world!

phraseFinal.includes("world"); // -> true, includes(str, index)
phraseFinal.startsWith("He"); // -> true
phraseFinal.startsWith("he"); // -> false
phraseFinal.endsWith("!"); // -> true
phraseFinal.slice(0, 3); // -> 'Hel', str.slice(indexStart, indexEnd)
phraseFinal.substring(0, 3); // -> 'Hel', str.substring(indexStart, indexEnd)
phraseFinal.indexOf("w"); // 7
phraseFinal.lastIndexOf("o"); // 8
phraseFinal.padStart(16, "-"); // -> ---Hello, world!
phraseFinal.padStart(16); // ->    Hello, world!
phraseFinal.padEnd(16, "-"); // -> Hello, world!---

//str.repeat(n)
const a = "a";
a.repeat(4); // -> aaaa

//str.replace(regexp|substr, newstr|function)
let clothes = "Camisas Calças Bermudas Vestidos Saias";
clothes = clothes.replace(/[ ]+/g, ", "); // Camisas, Calças, Bermudas, Vestidos, Saias

//str.split(padrao)
// remove the 'padrao' and return a array
const listItems = "Camisas Bonés Calças Bermudas Vestidos Saias";
const arrayItems = listItems.split(" "); // -> ['Camisas', 'Bonés', 'Calças', 'Bermudas', 'Vestidos', 'Saias']
const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const htmlNovo = htmlArray.join("section");

//str.toLowerCase()
const sexo = "Feminino";
console.log(sexo.toLocaleLowerCase() === "feminino"); // true

//str.trim()
const valor = "  R$ 23.00   ";
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'
