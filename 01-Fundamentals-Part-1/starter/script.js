/*
let js = 'amadzing';

console.log( 40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Daniel";
console.log (firstName);
console.log (firstName);
console.log (firstName);
console.log (firstName);

let myFirstJob = "Programmer";
let myCurrebtJob = "Teacher";

console.log(myFirstJob);
console.log(myCurrebtJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);


let age = 24;
console.log(age)
age = 25
console.log(age)

const birthYear = 2000;
console.log(birthYear);
birthYear = 2001;
console.log(age);


const now = 2037;
const ageDaniel = now - 2000;
const ageSarah = now - 1997;
console.log(ageDaniel, ageSarah);

console.log(ageDaniel * 2, ageDaniel / 10, 11 ** 3);

const firstName = "Daniel";
const lastName = "Anomfueme";

console.log(firstName + " " + lastName);

//Assignmenmt Operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageDaniel > ageSarah); // >, <, >=, <=
console.log(ageDaniel >= 37);

const isFullAge = ageDaniel >= 37;

console.log(now - 2000 > now - 1997);


const now = 2037;
const ageDaniel = now - 2000;
const ageSarah = now - 1997;

console.log(now - 2000 > now - 1997);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageDaniel + ageSarah) / 2;

console.log(ageDaniel, ageSarah, averageAge);


//template string
const firstName = "Daniel";
const job = "programmer";
const birthYear = 2000;

const daniel =
  "I'm " + firstName + ", a " + (2024 - birthYear) + " years old " + job + "!";
console.log(daniel);

const danielNew = `I'm ${firstName}, a ${2024 - birthYear} years old ${job}!`;
console.log(danielNew);

console.log(`I am just a boy`);
console.log(`String with \n\
multiple \n\
lines`);

console.log(`String with
multiple
lines`);
*/

// Control flow
const age = 12;

if (age >= 18) {
  console.log("Daniel can start driving lessons 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Daniel is too young. Wait another ${yearsLeft} years to start driving lessons`
  );
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
