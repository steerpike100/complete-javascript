const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

// let markBMI2 = markMass / (markHeight * markHeight);

const markHigherBMI = markBMI > johnBMI;

console.log(
  "Marks BMI is:",
  markBMI,
  "John's BMI is",
  johnBMI,
  "does Mark have higher BMI?: ",
  markHigherBMI
);
