// Quiz Game

// Question Object

function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct; 
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for(var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }

};

Question.prototype.checkAnswer = function(answer, callback) {

    var sc;

    if(answer === this.correct) {
        console.log('Correct!');
        sc = callback(true);
    }
    else {
        console.log('Incorrect!');
        sc = callback(false);
    }

    this.displayScore(sc);
};

Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('------------------');
}

function score() {
    var sc = 0;
    return function(correct) {
        if(correct) {
            sc++;
        }
        return sc;
    }
}

var keepScore = score();

function nextQuestion() {
    var a1 = ['david', 'andrew', 'jonathan'];
    var correct1 = 2;
    
    var a2 = ['red', 'blue', 'green'];
    var correct2 = 1;
    
    var a3 = ['2000', '2003', '1998'];
    var correct3 = 0;
    
    var q1 = new Question('What is my first name?', a1, correct1);
    
    var q2 = new Question('What is my favorite color?', a2, correct2);
    
    var q3 = new Question('What year was I born?', a3, correct3);
    
    var questions = [q1, q2, q3];
    
    var choice = Math.floor(Math.random() * questions.length);
    
    questions[choice].displayQuestion();
    
    var answer = prompt('Please select the correct answer (just type the number).');

    if(answer !== 'exit') {
        var result = questions[choice].checkAnswer(parseInt(answer), keepScore);
            
        score(result);
        nextQuestion();
    }
};

nextQuestion();
