const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

// let markBMI2 = markMass / (markHeight * markHeight);

const markHigherBMI = markBMI > johnBMI;

if (markBMI > johnBMI) {
  console.log(`Mark has the higerh BMI of: ${markBMI}`);
} else {
  console.log(`John has the higher BMI of ${johnBMI}`);
}
