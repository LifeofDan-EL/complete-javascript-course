/*
LECTURE ASSIGNMENTS
*/

const country = "Nigeria";
const continent = "Africa";
let nigeriaPopulation = 232679478;
const isIsland = false;
let language = "english";
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

console.log(
  "9" - "5",
  "19" - "13" + "17",
  "19" - "13" + 17,
  "123" < 57,
  5 + 6 + "4" + 9 - 4 - 2
);

const numNeighbours = Number();
// prompt("How many neighbour countries does your country have?")
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else console.log("No borders");

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

console.log(
  `${country}'s population is ${
    nigeriaPopulation > 3300000 ? "above" : "below"
  } average`
);
