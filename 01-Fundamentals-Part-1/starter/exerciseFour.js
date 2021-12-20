const billValue = 40;
let tip = 0;

billValue >= 50 && billValue <= 300
  ? (tip = (billValue * 15) / 100)
  : (tip = (billValue * 20) / 10);

console.log(
  `The bill value was: ${billValue}💰 and the tip was: ${tip}💁, meaning the total value was ${
    billValue + tip
  }🤑`
);
