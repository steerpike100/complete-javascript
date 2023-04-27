'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];


// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const displayMovements = function (movements) {
    containerMovements.innerHTML = '';

    movements.forEach(function (mov, i) {

        const type = mov > 0 ? 'deposit' : 'withdrawal'
        const html =
            `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;
        containerMovements.insertAdjacentHTML('afterbegin', html);

    });

}
// const calcDisplayBalance = function (acc) {
//     acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
//     labelBalance.textContent = `${acc.balance}€`;
// };

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}€`;

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');

    })

};

createUsernames(accounts);

const updateUI = function (acc) {
    // Display movements
    displayMovements(acc.movements);

    // Display balance
    calcDisplayBalance(acc);

    // Display summary
    calcDisplaySummary(acc);
};


//Event Handlers

let currentAccount;
btnLogin.addEventListener('click', function (e) {
    //Prevent form from submitting
    e.preventDefault();

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        console.log('LOGIN')
        //Display UI and welcome message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
        containerApp.style.opacity = 100;
        //Clear input fields

        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        //update the UI
        updateUI(currentAccount)
    }
})

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
        acc => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = '';

    if (
        amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username) {
        console.log('Transfer valid')
    }
    //Doing the transfer
    {
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount)

        updateUI(currentAccount);
    }

});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);
    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        //Add movement
        currentAccount.movements.push(amount);

        //Update UI
        updateUI(currentAccount)

        inputLoanAmount.value = '';
    }
})



btnClose.addEventListener('click', function (e) {
    e.preventDefault();


    if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {

        const index = accounts.findIndex(acc => acc.username === currentAccount.username)

        console.log(`Index is: ${index}`)

        //Delete account
        accounts.splice(index, 1)

        //Hide UI
        containerApp.style.opacity = 0;
    }
    inputCloseUsername.value = inputClosePin.value = '';

})

console.log(movements)
console.log(movements.includes(-130))

//SOME:Condition

const anyDeposits = movements.some(mov => mov > 1500)
console.log(anyDeposits)

//EVERY
console.log(movements.every(mov=> mov>0))

//Separate callback

const deposit = mov => mov>0;
console.log(movements.some(deposit))

/////////////////////////////////////////////////


/////////////////////////////////////////////////
// LECTURES
const deposits = movements.filter(function (mov) {
    return mov > 0;
})

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);


const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov)

// const withdrawals  = movements.filter(function(mov){
//     return mov <0;
// })

const withdrawls = movements.filter(mov => mov < 0)

const balance = movements.reduce((acc, cur) => acc + cur, 0);


let balance2 = 0;
for (const mov of movements) balance2 += mov;


//Maximum value
const max = movements.reduce((acc, mov) => {
    if (acc > mov) {
        return acc;
    } else {
        return mov
    }
}, movements[0])


const arr = [[1,2,3],[4,5,6],7,8];
console.log(arr.flat())

const arrDepp = [[[1,2],3],[4,5,6],7,8];
console.log(arrDepp.flat(2))

const accountMovements = accounts.map(acc => acc.movements)
console.log(accountMovements)
const allMovements = accountMovements.flat()
console.log(allMovements)

const overallBalance = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc,mov) => acc + mov,0);
console.log(overallBalance)

//flatMap

const overallBalance2 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc,mov) => acc + mov,0);
console.log(overallBalance2)
/////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a
shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)

2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy
("Dog number 2 is still a puppy 🐶")

4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge.
If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]

TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const withdrawals = movements.filter(mov => mov <0)
// let humanAge;
// const humanAgeCalc = (dogAge) => dogAge <= 2 ? humanAge = 2 * dogAge : humanAge = 16 + dogAge * 4;
// const calcAverageHumanAge = function (ages) {
//     const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     const adults = humanAges.filter(age => age >= 18);
//     console.log(humanAges)
//     console.log(adults)
//
//     const average = adults.reduce((acc, age) => acc + age,0)/adults.length
//
//     return average
// }

// const avg1 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
// console.log(avg1)

// const ages = [5, 2, 4, 1, 15, 8, 3]
//
// const calcAverageHumanAge = ages => ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0)
//
//
// const avg1 = calcAverageHumanAge(ages)
// console.log(avg1)
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// const firstWithdrawal = movements.find(mov => mov < 0)
// console.log(movements)
// console.log(firstWithdrawal)
//
// console.log(accounts)
//
// const account = accounts.find(acc => acc.owner === 'Jessica Davis')
// console.log(account)


// const checkDogs = function (dogsJulia, dogsKate) {
//     let juliaCorr = [...dogsJulia.slice(1, 3)]
//     let combined = juliaCorr.concat(dogsKate)
//
//   console.log(combined)
//
//     combined.forEach(function (dogAge, i) {
//       dogAge >= 3 ? console.log(`Dog number ${i+1} is an adult, and is ${dogAge} years old`) : console.log(`Dog number ${i +1} is still a puppy`)
//     });
// }
//
// // console.log(combined)
//
//
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])


// const eurToUsd = 1.1;
// console.log(movements)
// const totalDepositsUSD = movements
//     .filter(mov => mov > 0)
//     .map((mov, i, arr) => {
//         // console.log(arr)
//         return mov * eurToUsd;
//     })
//     // .map(mov => mov * eurToUsd)
//     .reduce((acc, mov) => acc + mov, 0)

// console.log(totalDepositsUSD)
// const movementsUSD = movements.map(function (mov){
//     return mov * eurToUsd;
// })

// const movementsUSD = movements.map(mov => mov * eurToUsd);
//
// console.log(movements)
// console.log(movementsUSD)
//
// const movementsUSDFor = [];
//
// for (const mov of movements) movementsUSDFor.push(mov * eurToUsd);
// console.log(movementsUSDFor)
//
// const movementsDescriptions = movements.map(
//     (mov, i) =>
//         `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//             mov)}`
// )
//
// console.log(movementsDescriptions)


