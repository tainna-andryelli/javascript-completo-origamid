function isIsogram(str) {
  let word = str.toLowerCase();
  let letter = 0;
  for(let i = 1; i < word.length; i++) {
    if(word[i] == word[letter]) {
      return false;
    }
    
    if(i == str.length - 1) {
      letter++;
      i = letter;
    }
  }

  return true;
}

function digitize(n){
  let nums = n.toString();

  let array = [];
  let count = 0;
  for(let i = nums.length - 1; i >= 0; i--) {
    array.push(parseInt(nums[i]));
    count++;
  }

  return array;
}

function printerError(s) {
  let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  let firstPos = abc.indexOf('m') + 1;
  let errors = 0;

  for(let i = firstPos; i < abc.length; i++) {
    for(let letter of s) {
      if(letter == abc[i]) {
        errors++;
      }
    }
  }
  
  return `${errors}/${s.length}`;
}

function findAverage(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }

  return array.length == 0 ? 0 : sum/array.length;
}

function isPangram(string) {
  let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  let newString = string.toLowerCase().replaceAll(' ', '');
  for(let i = 0; i < abc.length; i++) {
    if(!newString.includes(abc[i])){
      return false;
    }
  }
  return true;
}

function stringToArray(str) {
  return str.split('');
}

