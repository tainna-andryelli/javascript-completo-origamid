var progLanguages = ["Java", "JavaScript", "Python", "PHP", "Ruby"];

progLanguages.pop(); //remove the last item and return it
console.log(progLanguages); // ["Java", "JavaScript", "Python", "PHP"]

progLanguages.push("C++"); // add in last position
console.log(progLanguages); // ["Java", "JavaScript", "Python", "PHP", "C++"]

progLanguages.length; // 5

// for()
for (let i = 0; i < progLanguages.length; i++) {
  console.log(progLanguages[i]);
}

// forEach(item, index, array)
var fruits = ["apple", "banana", "papaya", "melon"];
fruits.forEach(function (fruit, index) {
  console.log(fruit, index);
});
