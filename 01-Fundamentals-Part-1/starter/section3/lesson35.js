//Arro function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yeasrUntilRetrement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement}`;
};

console.log(yeasrUntilRetrement(1991, "Steve"));
console.log(yeasrUntilRetrement(1980, "Dick"));
