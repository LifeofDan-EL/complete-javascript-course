/*
LECTURE ASSIGNMENTS
*/

const country = "Nigeria";
const continent = "Africa";
let nigeriaPopulation = 232679478;
const isIsland = false;
let language = "English";
const finlandPopulation = 6000000;
const averagePopulation = 33000000;
let description;

console.log(country);
console.log(continent);
console.log(nigeriaPopulation);

console.log(typeof isIsland);
console.log(typeof nigeriaPopulation);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof language);

console.log(nigeriaPopulation / 2);
nigeriaPopulation++;
console.log(nigeriaPopulation);
console.log(nigeriaPopulation > finlandPopulation);
console.log(nigeriaPopulation < averagePopulation);

description = `${country} is in ${continent}, and its ${nigeriaPopulation} people speak ${language}`;
console.log(description);

if (nigeriaPopulation > 33000000) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${
      averagePopulation - nigeriaPopulation
    } below average`
  );
}
