/*
LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions)
2. Log their values to the console
*/

const country = "Nigeria";
const continent = "Africa";
let nigeriaPopulation = 232679478;
const isIsland = false;
let language = "English";
const finlandPopulation = 6000000;
const averagePopulation = 33000000;

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
console.log(
  country +
    " is in " +
    continent +
    ", and its " +
    nigeriaPopulation +
    " people speak " +
    language
);
