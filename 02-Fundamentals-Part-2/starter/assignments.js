// Functions

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

data1 = describeCountry("Nigeria", "200 million", "Abuja");
data2 = describeCountry("Ghana", "33 million", "Accra");
data3 = describeCountry("Kenya", "54 million", "Nairobi");

console.log(data1, data2, data3);

function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}

//  Function Declarations vs. Expressions
const population1 = percentageOfWorld1(200000000);
const population2 = percentageOfWorld1(1441000000);
const population3 = percentageOfWorld1(45000000);

console.log(population1, population2, population3);

const percentageOfWorld2 = function (population) {
  return (population / 7900000000) * 100;
};

const population4 = percentageOfWorld2(200000000);
const population5 = percentageOfWorld2(1441000000);
const population6 = percentageOfWorld2(45000000);

console.log(population4, population5, population6);

//  Arrow Functions
const percentageOfWorld3 = (population) => (population / 7900000000) * 100;
const population7 = percentageOfWorld3(200000000);
const population8 = percentageOfWorld3(1441000000);
const population9 = percentageOfWorld3(45000000);

console.log(population7, population8, population9);

//  Functions Calling Other Functions

const describePopulation = (country, population) => {
  const percentageValue = percentageOfWorld1(population);
  console.log(
    `${country} has ${population} people which is about ${percentageValue}% of the world`
  );
};

describePopulation("Nigeria", 200000000);
describePopulation("China", 1441000000);
describePopulation("Peace", 45000000);
