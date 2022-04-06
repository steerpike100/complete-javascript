const jonas = {
    firstName:'Jonas',
    lastName:'Schedtmann',
    birthYear:1991,
    job:'teacher',
    friends:['Michael','Peter','Steven'],
    hasDriversLicense: false,

    // calcAge: function(birthYear){
    //     console.log(this);
    //     return 2037 - this.birthYear
    // }

    calcAge: function(birthYear){
        this.age = 2037 - this.birthYear;
        return this.age;
    },


    getSummary: function(){
            return `${this.firstName} is a ${this.calcAge()}
            -years old ${jonas.job}, 
            and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`

    }
    
  
};

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

//Challenge
//"Jonas is a 46 year old teacher, and he as a drivers license"

// console.log(`Jonas is a ${jonas.calcAge()} year old teacher`);
console.log(jonas.getSummary());