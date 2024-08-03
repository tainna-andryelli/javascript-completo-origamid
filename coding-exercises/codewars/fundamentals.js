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

//Calculate BMI
function bmi(weight, height) {
  const bmi = weight / height**2;
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25) {
    return "Normal";
  } else if(bmi <=30) {
    return "Overweight";
  }
  return "Obese";
}

//Reduce but grow
function grow(x){
  let mult = 1; 
  x.forEach((e)=> {
    mult *= e;
  });
  
  return mult;
}

//Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump
};

//reverses the string
function solution(str) {
  return str.split('').reverse().join('');
}

//make negative
function makeNegative(num){
  return num > 0 ? -num : num;
}