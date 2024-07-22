var pessoa = {
  nome: 'Laura',
  idade: 20,
  comidaFavorita: 'Pizza',
  seApresenta(greeting) {
    return `${greeting}, my name is ${this.nome}, I'm ${this.idade} years old and my favorite food is ${this.comidaFavorita}`;
  }
}

pessoa.lastName = 'Ribeiro';
pessoa.nome = 'Louren';
console.log(pessoa.seApresenta("Good morning"));

pessoa.corre = function() {
  return ('correndo...');
};