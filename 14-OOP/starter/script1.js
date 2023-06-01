'use strict';


/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const myNewCar = new Car('Ford', 120);
console.log(myNewCar)
myNewCar.accelerate();
myNewCar.brake();
myNewCar.speedUS = 50;
console.log(myNewCar)
console.log(myNewCar.speedUS)


// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }
//
// Car.prototype.accelerate = function () {
//     console.log(`${this.make} is going at ${this.speed += 10} km/h`)
// }
//
// Car.prototype.brake = function () {
//     console.log(`${this.make} is going at ${this.speed -= 5} km/h`)
// }
//
// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);
//
// car1.accelerate()
// car2.accelerate()
// car1.brake();
// car2.brake();


//class expression
// const PersonCl = class {
//
// }

//class declaration
// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }
//
//     //Methods will be added to .prototype property
//     calcAge() {
//         console.log(2037 - this.birthYear)
//     }
//
//     greet(){
//         console.log(`Hey ${this.firstName}`)
//     }
//
//     get age(){
//         return 2037 - this.birthYear
//     }
//
//     //Set a property that already exists
//     set fullName(name){
//         console.log(name)
//         if(name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name`)
//     }
//
//     get fullName(){
//         return this._fullName
//     }
//
//     static hey(){
//     console.log('Hey there')
//     console.log(this)
//     }
//
// }
//
// const jessica = new PersonCl('Jessica Davis', 1996);
// jessica.calcAge();
// console.log(jessica.age)
//
// console.log(jessica.__proto__ === PersonCl.prototype)
//
// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`)
// }
//
// jessica.greet();
// const walter = new PersonCl('Walter White', 1965);
// PersonCl.hey()
//
//
// const account = {
//     owner: 'jonas',
//     movements: [200, 530, 120, 300],
//
//     get latest() {
//         return this.movements.slice(-1).pop();
//     },
//
//     set latest(mov){
//         this.movements.push(mov);
//     }
// }
//
// console.log(account.latest)
// account.latest = 50;
// console.log(account.movements)
//
//
// const PersonProto = {
//     calcAge(){
//         console.log(2037 - this.birthYear)
//     },
//
//     init(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
//
// }
//
// const steven = Object.create(PersonProto);
// console.log(steven)
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge()
//
// console.log(steven.__proto__ === PersonProto);
// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();





