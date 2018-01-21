import * as $ from "jquery";
// template literals
let a = 'puta';
let b = `Yo, ${a}`;
console.log(b);
// spread operator
let c = [20, 30, 40];
let d = [10, ...c, 50];
console.log(d);
// destructuring assignment
let man = {
  name: 'John',
  kids: 2
};
let name, kids;
//let {name, kids} = man;
({
  name,
  kids
} = man);
console.log(name, kids);
// map
let values = [20, 30, 40];
let multiply = (n) => {
  return n * 3;
}
let multiplied = values.map(multiply);
console.log(multiplied);
let arr = [{
  name: "John",
  age: "21"
}, {
  name: "Alice",
  age: "20"
}];
let names = arr.map(person => person.name);
console.log(names);
// map jQuery
var names2 = $.map(arr, function(v, k) {
  return v.name;
});
console.log(names2);
// filter
let points = [4, 9, 11, 15];
let highScores = points.filter((n) => {
  return n > 10;
});
console.log(highScores);
// prototypes
/*
function Vehicle(make, year) {
  this.make = make;
  this.year = year;
  this.happens = () => `They stole my ${this.make} in ${this.year}. `;
}
*/
class Vehicle {
  constructor(make, year) {
    this.make = make;
    this.year = year;
    this.happens = () => `They stole my ${this.make} in ${this.year}. `;
  }
}
Vehicle.prototype.color;
Vehicle.prototype.info = function() { // only classic function refers to this, don't use arrow function here
  return `A ${this.color} ${this.make} made in ${this.year}. `;
}
let myCar = new Vehicle("Tesla", 2017);
myCar.color = "black";
console.log(myCar.info() + myCar.happens());
// Sets
let nums = [3, 14, 36, 78];
let numSet = new Set(nums);
console.log(numSet);
const contains = (word, letter) => {
  let letters = word.split("");
  let letterSet = new Set(letters);
  return letterSet.has(letter);
};
let true_check = contains("west", "e");
let false_check = contains("north", "e");
// Maps
const string = 'supercalifragilisticexpialidocious';
let letters = new Map();
for (let i = 0; i < string.length; i++) {
  let letter = string[i];
  if (!letters.has(letter)) {
    letters.set(letter, 1);
  } else {
    letters.set(letter, letters.get(letter) + 1);
  }
}
console.log(letters);
