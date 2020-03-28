//Coding Challenge 3

function tip_calculator(bill) {

    if (bill < 50) {
        return bill * 0.20
    }
    else if (bill > 200) {
        return bill * 0.10
    }
    else {
        return bill * 0.15
    }
}

tip1 = tip_calculator(124);
tip2 = tip_calculator(48);
tip3 = tip_calculator(268);

tips = [tip1, tip2, tip3];

bills = [124 + tip1, 48 + tip2, 268 + tip3]

console.log(tips);
console.log(bills);