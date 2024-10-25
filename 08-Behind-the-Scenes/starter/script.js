'use strict';
/*
function calcAge(birthyear) {
  const age = 2024 - birthyear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'John';

      // Reassigning outer scope's variable
      output = 'New Output!';

      const str = `Oh. and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // console.log(add(2, 3));
    // console.log(str);
    console.log(millenial);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Daniel';
calcAge(1991);

// console.log(age);
// printAge();


//Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Daniel';
let job = 'programmer';
const year = 1991;

//Functions
console.log(addDecl(2, 6));
// console.log(addExpr);
console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);


// console.log(this);

const calcAge = birthyear => {
  console.log(2037 - birthyear);
  // console.log(this);
};

// calcAge(2000);

const daniel = {
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

daniel.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = daniel.calcAge;
matilda.calcAge();

const f = daniel.calcAge;

f();


const daniel = {
  firstName: 'Daniel',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // Self or that
    // const isMillennial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const isMillennial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillennial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstname}`);
  },
};

daniel.greet();
daniel.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 4, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Daniel',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);
*/

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Anomfueme';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
