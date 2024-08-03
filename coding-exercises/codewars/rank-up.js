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

