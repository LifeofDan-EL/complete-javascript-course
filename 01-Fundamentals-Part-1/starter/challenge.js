/* Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m talL
*/

let markHeight;
let markMass;
let markBMI;

let johnHeight;
let johnMass;
let johnBMI;

let markHigherBMI;

// Data 1 with BMI method 1
markHeight = 1.69;
markMass = 78;

johnHeight = 1.95;
johnMass = 92;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

// Data 2 with BMI method 2
markHeight = 1.88;
markMass = 95;

johnHeight = 1.76;
johnMass = 85;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);
markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

/* 
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!
*/

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// Data 1
let dolphinsAverageScore = (96 + 108 + 89) / 3;
let koalasAverageScore = (88 + 91 + 110) / 3;

console.log(dolphinsAverageScore, koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore) {
  console.log(
    `Dolphins won the game with ${
      dolphinsAverageScore - koalasAverageScore
    } score higher than Koala`
  );
} else if (koalasAverageScore > dolphinsAverageScore) {
  console.log(
    `Koalas won the game with ${
      koalasAverageScore - dolphinsAverageScore
    } score higher than Dolphins`
  );
} else if (dolphinsAverageScore === koalasAverageScore) {
  console.log(`Both teams drew`);
}

// Data Bonus 1

dolphinsAverageScore = (97 + 112 + 101) / 3;
koalasAverageScore = (109 + 95 + 123) / 3;

console.log(dolphinsAverageScore, koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
  console.log(
    `Dolphins won the game with ${
      dolphinsAverageScore - koalasAverageScore
    } score higher than Koalas`
  );
} else if (
  koalasAverageScore > dolphinsAverageScore &&
  koalasAverageScore >= 100
) {
  console.log(
    `Koalas won the game with ${
      koalasAverageScore - dolphinsAverageScore
    } score higher than Dolphins`
  );
} else if (dolphinsAverageScore === koalasAverageScore) {
  console.log(`Both teams drew`);
}

// Data Bonus 2

dolphinsAverageScore = (97 + 112 + 101) / 3;
koalasAverageScore = (109 + 95 + 106) / 3;

console.log(dolphinsAverageScore, koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
  console.log(
    `Dolphins won the game with ${
      dolphinsAverageScore - koalasAverageScore
    } score higher than Koalas`
  );
} else if (
  koalasAverageScore > dolphinsAverageScore &&
  koalasAverageScore >= 100
) {
  console.log(
    `Koalas won the game with ${
      koalasAverageScore - dolphinsAverageScore
    } score higher than Dolphins`
  );
} else if (
  dolphinsAverageScore === koalasAverageScore &&
  dolphinsAverageScore >= 100 &&
  koalasAverageScore >= 100
) {
  console.log(`Both teams drew`);
} else console.log(`No team won`);
