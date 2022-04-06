//BMI = weight / height **2

const mark = {
    fullName: 'Mark Miller',
    weight:78,
    height:1.69,


    calcBMI: function(){
        this.bmi = this.weight / this.height **2;
        return this.bmi;
    }
}

//BMI = weight / height **2

const john = {
    fullName: 'John Smith',
    weight:92,
    height:1.95,

    calcBMI: function(){
        this.bmi = this.weight / this.height **2;
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();


if(mark.bmi> john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi})
    is higher than ${john.fullName}'s BMI (${john.bmi}'
    `);
}else if(john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi})
    is higher than ${mark.fullName}'s BMI (${mark.bmi}'
    `);

}





