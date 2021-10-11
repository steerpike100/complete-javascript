//5 falsy values: 9, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 1;

if (money) {
  console.log("Dont spend it all ");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("Yay, height is defined");
} else {
  console.log("Height is UNDEFINED");
}
