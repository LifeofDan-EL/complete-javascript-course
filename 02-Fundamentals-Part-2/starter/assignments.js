// Functions

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

data1 = describeCountry('Nigeria', '200 million', 'Abuja');
data2 = describeCountry('Ghana', '33 million', 'Accra');
data3 = describeCountry('Kenya', '54 million', 'Nairobi');

console.log(data1, data2, data3);

function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}

//  Function Declarations vs. Expressions
const population1 = percentageOfWorld1(200000000);
const population2 = percentageOfWorld1(1441000000);
const population3 = percentageOfWorld1(54000000);

console.log(population1, population2, population3);

const percentageOfWorld2 = function (population) {
  return (population / 7900000000) * 100;
};

const population4 = percentageOfWorld2(200000000);
const population5 = percentageOfWorld2(1441000000);
const population6 = percentageOfWorld2(54000000);

console.log(population4, population5, population6);

//  Arrow Functions
const percentageOfWorld3 = population => (population / 7900000000) * 100;
const population7 = percentageOfWorld3(200000000);
const population8 = percentageOfWorld3(1441000000);
const population9 = percentageOfWorld3(54000000);

console.log(population7, population8, population9);

//  Functions Calling Other Functions

const describePopulation = (country, population) => {
  const percentageValue = percentageOfWorld1(population);
  console.log(
    `${country} has ${population} people which is about ${percentageValue}% of the world`
  );
};

describePopulation('Nigeria', 200000000);
describePopulation('China', 1441000000);
describePopulation('Kenya', 54000000);

// Introduction to Array
const populations = [200000000, 1441000000, 54000000, 33000000];
console.log(populations.length == 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

// Introduction to Objects,Object Methods
const myCountry = {
  country: 'Nigeria',
  capital: 'Abuja',
  language: 'English',
  population: 200000000,
  isIsland: true,
  neigbours: 4,
  describe: function () {
    return console.log(
      `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neigbours} neigbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland: function () {
    return this.neigbours
      ? (myCountry.isIsland = true)
      : (myCountry.isIsland = false);
  },
};

myCountry.describe();
console.log(myCountry);
console.log(myCountry.checkIsland());

// Dot vs. Bracket Notation
console.log(
  `${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neigbours} neigbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population = myCountry.population - 2000000;
console.log(myCountry.population);

myCountry['population'] = myCountry['population'] + 2000000;
console.log(myCountry.population);

for (voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

// Looping Arrays, Breaking and Continuing
const populationss = [200000000, 1441000000, 54000000, 33000000];
const percentages2 = [];
for (let i = 0; i < populationss.length; i++) {
  percentages2.push(percentageOfWorld1(populationss[i]));
}
console.log(percentages2);

//Looping Backwards and Loops in Loops
const listofNeigbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];
for (let i = 0; i < listofNeigbours.length; i++) {
  for (let k = 0; k < listofNeigbours[i].length; k++) {
    console.log(`Neighbour: ${listofNeigbours[i][k]}`);
  }
}

const percentages3 = [];
let count = 0;
while (count < populationss.length) {
  percentages3.push(percentageOfWorld1(populationss[count]));
  count++;
}
console.log(percentages3);
