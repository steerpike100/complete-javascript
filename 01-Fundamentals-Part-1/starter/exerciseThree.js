const dolphinsScore = 10 + 95 + 10;
const koalasScore = 10 + 95 + 10;

let dolphinsAvgScore = dolphinsScore / 3;
let koalasAvgScore = koalasScore / 3;

console.log(dolphinsAvgScore);
console.log(koalasAvgScore);

if (dolphinsAvgScore >= 100 && dolphinsAvgScore > koalasAvgScore) {
  console.log("Dolphins won!");
} else if (dolphinsAvgScore >= 100 && dolphinsAvgScore === koalasAvgScore) {
  console.log("It was a draw!");
} else if (koalasAvgScore >= 100) {
  console.log("Koalas won!");
} else {
  console.log("Neither team won as neither team scored > 100");
}
