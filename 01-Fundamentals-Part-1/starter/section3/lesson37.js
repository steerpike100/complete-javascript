const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetrement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement}`);
    return retirement;
  } else {
    console.log(`${firstName} has already returned 🥳`);
    return -1;
  }
  //   return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetrement(1991, "Steve"));
console.log(yearsUntilRetrement(1971, "Mike"));
