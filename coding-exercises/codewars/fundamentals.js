//convert number to string
function numberToString(num) {
  const string = "" + num;
  return string;
}

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

var summation = function (num) {
  sum = 0;
  for(let i = 1; i <= num; i++) {
    sum += i; 
  }
  
  return sum;
}

function positiveSum(arr) {
  sum = 0;
  arr.forEach((elem) => {
    if(elem > 0) {
      sum += elem;
    }
  });
  
  return sum;
}

//Remove String Spaces
function noSpace(x){
  return x.replaceAll(' ', '');
}

//Sentence Smash
function smash (words) {
  let sentenceSmach = "";
  for(let i = 0; i < words.length; i++){
    if(i == words.length - 1) {
      sentenceSmach += words[i];
      break;
    }
    sentenceSmach += words[i] + " ";
  }
  
  return sentenceSmach
};

//Opposites Attract
function lovefunc(flower1, flower2){
  if(flower1 % 2 == 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 == 0) {
    return true;
  }
  return false;
}

//DNA to RNA Conversion 
function DNAtoRNA(dna) {
  return dna.replaceAll('T', 'U');
}

//Are you Playing Banjo?
function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() == 'r'){
    return name + " plays banjo";
    }
    
  return name + " does not play banjo";
}