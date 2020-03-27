//Coding Challenge 5


johnTrip = {

    bills: [124, 48, 268, 180, 42],
    tips: [],
    payments: [],

    tip_calculator: function() {

        for(var i = 0; i < this.bills.length; i++) {
            
            var bill = this.bills[i];
            var percent;
    
            if(bill < 50) {
                percent = 0.20;
            }
            else if(bill > 200) {
                percent = 0.10;
                
            }
            else {
                percent = 0.15;
            }
            
            var tip = bill * percent;
            this.tips.push(tip);
            this.payments.push(bill + tip);
        }
    }
}

markTrip = {

    bills: [77, 375, 110, 45],
    tips: [],
    payments: [],

    tip_calculator: function() {

        for(var i = 0; i < this.bills.length; i++) {
            
            var bill = this.bills[i];
            var percent;
    
            if(bill < 100) {

                percent = 0.20;
            }
            else if(bill > 300) {

                percent = 0.25;
            }
            else {
                percent = 0.20;
            }
            
            var tip = bill * percent;
            this.tips.push(tip);
            this.payments.push(bill + tip);
        }
    }
}

function average_Tip(tips) {

    var totalTips = 0;

    for(var i = 0; i < tips.length; i++) {
        totalTips += tips[i];
    }
    
    return totalTips / tips.length;
}

johnTrip.tip_calculator();
markTrip.tip_calculator();

console.log(johnTrip.tips);

johnTrip.average = average_Tip(johnTrip.tips);
markTrip.average = average_Tip(markTrip.tips)

console.log("John Average: " + johnTrip.average);
console.log("Mark Average: " + markTrip.average);

console.log(johnTrip, markTrip);