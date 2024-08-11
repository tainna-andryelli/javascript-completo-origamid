function removeChar(str) {
  let newString = '';
  for(let i = 1; i < str.length - 1; i++) {
    newString += str[i];
  }

  return newString;
}

function litres(time) {
  return parseInt(time * 0.5);
}

function boolToWord( bool ) {
  return bool ? 'Yes' : 'No';
}

var isSquare = function(n) {
  return Number.isInteger(Math.sqrt(n));
}

function dnaStrand(dna) {
  let newDNA = '';
  for(let i = 0; i < dna.length; i++){
    console.log(dna[i]);
    if(dna[i] == 'A') {
      newDNA += 'T';
    } else if (dna[i] == 'T') {
      newDNA += 'A';
    } else if(dna[i] == 'C') {
      newDNA += 'G';
    } else if(dna[i] == 'G') {
      newDNA += 'C';
    }
  }

  return newDNA;
}

function squareSum(numbers) {
  let squareSum = 0;
  for(let i = 0; i < numbers.length; i++) {
    squareSum += numbers[i]**2;
  }

  return squareSum;
}

String.prototype.toJadenCase = function () {
  let quote = this.split(' ');
  let jadenCase = '';
  for(let i = 0; i < quote.length; i++) {
    quote[i] = quote[i][0].toUpperCase() + quote[i].substring(1);
    jadenCase += quote[i] + ' ';
  }

  return jadenCase.trimEnd();
};

'tainna vira dev'.toJadenCase();

function squareDigits(num) {
  let numbers = num.toString().split('');  
  let squareConc = '';
  for(let i = 0; i < numbers.length; i++) {
    squareConc += parseInt(numbers[i])**2 + '';
  }

  return parseInt(squareConc);
}

function duplicateCount(text) {
  text = text.toLowerCase();
  let twice = [];

  for(let i = 0; i < text.length; i++){
    for(let z = i + 1; z < text.length; z++) {
      if(text[i] == text[z]) {
        twice.push(text[i]);
      }
    }
  }

  twice = twice.filter(function(este, i) {
    // console.log('Este elemento:', este, ' i:', i, twice.indexOf(este) === i);
    // retorna toda a vez que 'este' elemento tiver a primeira ocorrência no index igual ao index dele
    return twice.indexOf(este) === i;
  });

  return twice.length;
}