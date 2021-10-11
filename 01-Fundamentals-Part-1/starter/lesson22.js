const age = 18;

if (age === 18) console.log(`You just became an adult (strict)`);

if (age == 18) console.log(`You just became an adult (loose)`);

const fave = Number(prompt("What's your favourite number?"));
console.log(fave);

if (fave === 23) {
  //'23' == 23
  //=== '23 != 23
  console.log("Cool! 23 is an amazing number");
} else if (fave === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (fave !== 23) console.log("Why not 23?");
