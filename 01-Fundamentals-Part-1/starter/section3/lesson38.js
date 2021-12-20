const dolphinsScore = 44 + 23 + 71;
const koalasScore = 65 + 54 + 49;

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (dolphinsScore, koalasScore) {
  if (scoreDolphins >= 2 * scoreKoalas) {
    return `Dolphins win: (${scoreDolphins} vs ${scoreKoalas}`;
  } else {
    return `Koalas win: (${scoreDolphins} vs ${scoreKoalas}`;
  }
};

console.log(checkWinner(scoreDolphins, scoreKoalas));
