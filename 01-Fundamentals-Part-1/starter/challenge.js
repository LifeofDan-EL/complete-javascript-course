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
