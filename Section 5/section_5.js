// Function constructor


var john = {
    name: 'john',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
};

// Instantiation
// new - creates an empty object
//     - points 'this' variable to new empty object instead of global object
var john = new Person('john', 1990, 'teacher');

john.calculateAge();

var jane = new Person('jane', 1969, 'designer');

var mark = new Person('mark', 1948, 'retired');

jane.calculateAge();
mark.calculateAge();





// Object.create

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
    {
        name: { value: 'jane' },
        yearOfBirth: { value: 1969 },
        job: { value: 'designer' },

    });





// ---------------------------------
// Primitives vs objects

// Primatives

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


// Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);


// ---------------------------------
// Functions


var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

// PRIMATIVE
// primitive as function parameter means
// function creates a copy of the primative

// OBJECT
// object as function parameter
// means passing a reference to the object
function change(a,b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);



var years = [1990, 1963, 1937, 2005, 2008];

function arrayCalc(arr, fn) {

    var arrRes = [];

    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(ele) {
    return 2020 - ele;
}

function isFullAge(ele) {
    return ele >= 18;
}

function maxHeartRate(ele) {

    if (ele >= 18 && ele <= 81) {
        return Math.round(206.9 - (0.67 * ele));
    }

    return -1;
}

var ages = arrayCalc(years, calculateAge);

console.log(ages);

var heartRates = arrayCalc(ages, maxHeartRate);
console.log(heartRates);



// ---------------------------------
//Functions returning functions


function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ", can you explain what UX design is?");
        }
    }
    else if(job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    }
    else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');

var designerQuestion = interviewQuestion('designer');

designerQuestion('John');
teacherQuestion('John');

interviewQuestion('teacher')('mark');


// ---------------------------------
// Lecture IIFE


function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();


// Mainly used for data privacy
// Parentheses make the function an expression not declaration
// last parentheses invoke the function


(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);



// ---------------------------------
// Lecture Closures

function retirement(retirementAge) {
        var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log(retirementAge - age + a);
    }

}

var retirementUS = retirement(66);

retirementUS(1963);

function interviewQuestion(job) {

    var designer = ", can you explain what UX design is?";
    var teacher = 'What subject do you teach, ';
    var standard = ', what do you do?';

    return function(name) {
            if(job === 'designer') {
                console.log(name + designer);
            }
            else if(job === 'teacher') {
                console.log(teacher + name + '?');
            }
            else {
                console.log('Hello ' + name + standard);
            }
    }
}

interviewQuestion('designer')('jane');



// ---------------------------------
// Lecture: Bind, call, and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + timeOfDay + 
            ' Ladies and gentlemen! I\'m ' + 
            this.name + ' I\'m a ' + 
            this.job + ' and I\'m ' +
            this.age + ' years old.');
        }
        else if(style === 'friendly'){
            console.log('Hey! What\'s up? I\'m ' + 
            this.name + ' I\'m a ' + 
            this.job + ' and I\'m ' +
            this.age + ' years old. Have a nice ' + 
            timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};


// CALL method
// allows you to set the 'this' variable to another object
john.presentation.call(emily, 'friendly', 'afternoon');

// APPLY method
// similar to CALL method
//john.presentation.apply(emily, ['friendly', 'afternoon']);

// BIND method
// generates a copy of the function
// allows you to preset some parameters

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');

var years = [1990, 1963, 1937, 2005, 2008];

function arrayCalc(arr, fn) {

    var arrRes = [];

    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(ele) {
    return 2020 - ele;
}

function isFullAge(limit, ele) {
    return ele >= limit;
}

function maxHeartRate(ele) {

    if (ele >= 18 && ele <= 81) {
        return Math.round(206.9 - (0.67 * ele));
    }

    return -1;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
