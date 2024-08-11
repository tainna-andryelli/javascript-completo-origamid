function findEvenIndex(arr) {
  let sumLeft = 0;
  let sumRight = 0;

  for(let i = 0; i < arr.length; i++) {
    for(let z = 0; z < arr.length; z++) {
      if(z < i){
        sumLeft += arr[z];
      } else if( z > i) {
        sumRight += arr[z];
      }
    }
    if(sumLeft == sumRight) {
      return i;
    } else {
      sumLeft = 0;
      sumRight = 0;
    }
  }

  return -1;
}

function rowSumOddNumbers(n) {
  let triangle = [];
  let row = [];
  let oddNumber = 1;

  for(let i = 0; i < n; i++) {

    for(let z = 0; z < i + 1; z++) {
      row.push(oddNumber);    
      oddNumber += 2;
    }

    triangle.push(row);
    row = [];
  }

  let sumOddNumbers = 0;
  for(let i = 0; i < n; i++) {
    sumOddNumbers += triangle[n-1][i];
  }

  return sumOddNumbers;
}

function countPositivesSumNegatives(input) {
  let arr = [];
  let countPositives = 0;
  let sumNegatives = 0;

  if(input) {
    for(let i = 0; i < input.length; i++) {
      if(input[i] > 0) {
        countPositives++;
      } else if (input[i] < 0){
        sumNegatives += input[i];
      }
    }
  }

  if(countPositives == 0 || sumNegatives == 0) {
    return [];
  }

  arr[0] = countPositives;
  arr[1] = sumNegatives;

  return arr;
}

function abbrevName(name) {
  let namesList = name.split(' ');
  let abbrevName = '';
  for(let i = 0; i < namesList.length; i++) {
    if(i == namesList.length - 1){
      abbrevName += namesList[i][0].toUpperCase();
    } else {
      abbrevName += namesList[i][0].toUpperCase() + '.';
    }
  }

  return abbrevName;
}

function descendingOrder(n){
  let nums = n.toString().split('');
  let descendingNums = '';
  for(let i = nums.length - 1; i >= 0; i--) {
    descendingNums += nums[i] + '';
  }

  return descendingNums;
}