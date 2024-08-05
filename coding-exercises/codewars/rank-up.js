function humanReadable (seconds) {
  let hour = parseInt(seconds / 3600);
  let minutes = parseInt(seconds/60 - hour * 60);
  let secs = seconds % 60;

  const zero = (num) => (num < 10 ? '0' + num : num);

  return `${zero(hour)}:${zero(minutes)}:${zero(secs)}`;
}

function letters(num) {
  let alfabeth = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let letters = [];

  for(let i = 0; i < num; i++) {
    letters[i] = alfabeth[i];
  }
  
  if(num > 26) {
    let pos = 26;  

    for(let i = 0; pos < num; i++) {
      if(pos % 26 == 0 && pos != 26) {
        i = 0;
        letters[pos + i] = alfabeth[i];
        pos++;
      } else {
        letters[pos++] = alfabeth[i];
      }
    }
  }

  return letters;
}

// braces = '([])' => true
function validBraces(braces) {
  if(braces.length % 2 != 0) {
    return false;
  }

  for(let i = 0; i < braces.length; i++) {
    let letters = braces[i] + braces[i+1];

    if( letters == '{}' || letters == '()' || letters == '[]') {
      braces = braces.replace(letters, '');
      i = -1;
    }
  }

  if(braces.length > 0){
    return false;
  }
 
  return true;
}

// nFloors = 3
// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

function towerBuilder(nFloors) {
  let tower = [];
  let character = '*';
  let spaces = ' ';
  const maxCharacter = 2 * nFloors - 1;

  for(let i = 0; i < nFloors; i++) {
    let quant = 2 * i + 1;

    if(quant < maxCharacter) {
      let quantSpaces = (maxCharacter - quant)/2;
      tower[i] = spaces.repeat(quantSpaces) + character.repeat(quant) + spaces.repeat(quantSpaces);
    } else {
      tower[i] = character.repeat(quant);
    }
  }
  return tower;  
}

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) returns "(123) 456-7890"
function createPhoneNumber(numbers){
  let phoneNumber = '';
  for(let i = 0; i < numbers.length; i++) {
    if(i == 0) {
      phoneNumber += '(';
    } else if (i == 3) {
      phoneNumber += ') ';
    } else if (i == 6) {
      phoneNumber += '-';
    }
    phoneNumber += numbers[i];
  }

  return phoneNumber;
}