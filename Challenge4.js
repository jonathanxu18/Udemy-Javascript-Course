//Coding Challenge 4

var john = {
    fullName: 'John Smith',
    mass: 1000,
    height: 200,
    calc_BMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
}

var mark = {
    fullName: 'Mark Johnson',
    mass: 1000,
    height: 200,
    calc_BMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
}

if (john.calc_BMI() > mark.calc_BMI()) {
    console.log("John has higher BMI: " + john.calc_BMI());
}

else if (mark.calc_BMI() > john.calc_BMI()) {
    console.log("Mark has higher BMI: " + mark.calc_BMI());
}
else {
    console.log("John and Mark have the same BMI!");
}