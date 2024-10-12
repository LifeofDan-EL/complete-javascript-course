"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("I can drive :)");

function logger() {
  console.log("My name is Daniel");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(2000);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(2000);

console.log(age1, age2)


// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2000, "Daniel"));
console.log(yearsUntilRetirement(1997, "Sarah"));

// Function calling another function
function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;

  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(2000, "Daniel"));
console.log(yearsUntilRetirement(1950, "Sarah"));

const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Simon";
console.log(friends);

const firstName = "Daniel";
const daniel = [firstName, "Anomfueme", 2024 - 2000, "developer", friends];
console.log(daniel);
console.log(daniel.length);

function calcAge(birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);


// Array methods
const friends = ["Micheal", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay"); // Last
console.log(friends);
console.log(newLength);

friends.unshift("John"); // First
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}


// Dot vs. Bracket Notation
const daniel = {
  firstName: "Daniel",
  lastName: "Anomfueme",
  age: 2024 - 2000,
  job: "Programmer",
  friends: ["Philip", "Ben", "Izy"],
};

console.log(daniel);

console.log(daniel.lastName);
console.log(daniel["lastName"]);

const nameKey = "Name";
console.log(daniel["first" + nameKey]);
console.log(daniel["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Daniel? Choose between firstName, lastName, age, job and friends"
);
if (daniel[interestedIn]) {
  console.log(daniel[interestedIn]);
} else {
  console.log(
    `Wrong request! Choose between firstName, lastName, age, job and friends`
  );
}

// Add object
daniel.location = "Port Harcourt";
daniel["twitter"] = "@lifeofdanel";

console.log(daniel);

console.log(
  `${daniel.firstName} has ${daniel.friends.length} friends, and his best friend is called ${daniel.friends[0]}`
);



const daniel = {
  firstName: "Daniel",
  lastName: "Anomfueme",
  birthYear: 2000,
  job: "Programmer",
  friends: ["Philip", "Ben", "Izy"],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this)
  //   return 2024 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    } and he ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(daniel.calcAge());

console.log(daniel.age);
console.log(daniel.age);
console.log(daniel.age);

console.log(daniel.getSummary());



// For loop keeps running while condition is true
for (let rep = 1; rep <= 20; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏾‍♂️`);
}


const daniel = [
  "Daniel",
  "Anomfueme",
  2024 - 2000,
  "Programmer",
  ["Philip", "Ben", "Izy"],
  true,
];

const types = [];

for (let i = 0; i < daniel.length; i++) {
  // Reading from Daniel array
  console.log(daniel[i], typeof daniel[i]);

  // Filling types array
  // types[i] = typeof daniel[i];
  types.push(typeof daniel[i]);
}

console.log(types);

const ages = [];
const years = [1991, 2007, 1969, 2020];
for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}
console.log(ages);

// continue and break
console.log("--------ONLY STRINGS------");
for (let i = 0; i < daniel.length; i++) {
  if (typeof daniel[i] !== "string") continue;

  console.log(daniel[i], typeof daniel[i]);
}

console.log("--------BREAK WITH NUMBER------");
for (let i = 0; i < daniel.length; i++) {
  if (typeof daniel[i] === "number") break;

  console.log(daniel[i], typeof daniel[i]);
}

// Looping backwards
const daniel = [
  "Daniel",
  "Anomfueme",
  2024 - 2000,
  "Programmer",
  ["Philip", "Ben", "Izy"],
  true,
];

// 4, 3, ...,0
for (let i = daniel.length - 1; i >= 0; i--) {
  console.log(i, daniel[i]);
}

// For loop keeps running while condition is true
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋🏾‍♂️`);
  }
}


// While loop
let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋🏾‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end.....");
}
*/
