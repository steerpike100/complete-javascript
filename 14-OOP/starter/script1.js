'use strict';

const Person = function(firstName, birthYear) {
    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear)
}

const Student = function(firstName, birthYear, course) {
    Person.call(this,firstName, birthYear)
    this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const mike = new Student('Mike', 2020, 'Computer Science')
mike.introduce()
mike.calcAge();
console.log(mike.__proto__)
console.log(mike.__proto__.__proto__)
Student.prototype.constructor = Student;
console.log(mike.__proto__)
console.log(mike.hasOwnProperty('firstName'))