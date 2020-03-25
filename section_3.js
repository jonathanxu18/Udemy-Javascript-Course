///////////////////////////////////////
// Lecture: Hoisting

//functions
calculate_age(1965);

function calculate_age(year) {
    console.log(2016 - year);
}

var retirement = function(year) {
    console.log(65 -  (2016 - year));
}


//variables

console.log(age);

var age = 23;


function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);











///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    //console.log(a + b + c + d);
    console.log(a + d);
}




///////////////////////////////////////
// Lecture: The this keyword

console.log(this);

calc_age(1990);

function calc_age(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculate_age: function() {
        console.log(this);

        /*
        function inner_function() {
            console.log(this);
        }

        inner_function();

        */
    }

    
}

john.calculate_age();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

mike.calculate_age = john.calculate_age;

mike.calculate_age();

