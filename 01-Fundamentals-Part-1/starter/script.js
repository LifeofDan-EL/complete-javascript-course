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

// Type conversion
const inputYear = "1991";
console.log(Number(inputYear) + 18, inputYear);
console.log(inputYear + 18);

console.log(Number("Daniel"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);


// falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Daniel"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("There is money");
} else {
  console.log("Hustle more!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}


// equality operators

const age = "18";
if (age === 18) console.log("You just became an adult :) (strict) ");

if (age == 18) console.log("You just became an adult :) (loose)");

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite !== 23) console.log("Why not 23?");


// logical operators
const hasDriversLicense = true; //A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = true; // C

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Daniel is able to drive");
} else {
  console.log("Someone else should drive");
}


// Switch case
const day = "monday";
switch (day) {
  case "monday": // day === monday
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekedn :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekedn :D");
} else console.log("Not a valid day!");

*/

// conditional operator

const age = 24;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
