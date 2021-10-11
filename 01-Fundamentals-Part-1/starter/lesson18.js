const age = 15;
const isOldEnough = age >= 20;

if (age >= 18) {
  console.log(`Sarah can start dricing licence because she is `, age);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
