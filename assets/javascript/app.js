// VARIABLES --------------------------------------------

//      OBJECTS

var intervalId;

//      ARRAYS
// questionArray = [question0, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20];
questionArray = [];
randomArray = [0, 1, 2];

//      STRINGS/CHAR
responseMsg = "";


//      NUMBER/INTEGER
questionSet = 5;
wins = 0;
loss = 0;
questionCount = 0;
time = 10;
accuracy = 0;


//      BOOLEAN
gameMode = false;
clockRunning = false;

// ------------------------------------------------------------

$(document).ready(function () {

    // LETS PLAY!!
    gameMode = true;

    // Create the array with all available questions
    buildQuestionArray();

    // Get the first question
    newQuestion();

});

// Build the array with all the questions available
function buildQuestionArray() {

    for (let i = 0; i < questionAvailable; i++) {
        questionArray.push(eval("question" + i));
    }

    // Shuffles question array
    shuffleArray(questionArray);
}

// Select new question and display
function newQuestion() {

    // Check if we displayed as many questions as requested
    if (questionCount > questionSet) {

        // Set end game mode
        gameMode = false;

        return;
    }


    questionCount++;
    timerRun();
    updateScreen();
}

function updateScreen() {

    if (gameMode) {
        // Log the quesiton array selected
        console.log(questionArray[questionCount]);

        // Write the question
        $("#question").text(questionArray[questionCount].question);

        // Randomize answer order
        shuffleArray(randomArray);

        // Write the 
        $("#ans1").text(questionArray[questionCount].answerArray[randomArray[randomArray[0]]]);
        $("#ans2").text(questionArray[questionCount].answerArray[randomArray[randomArray[1]]]);
        $("#ans3").text(questionArray[questionCount].answerArray[randomArray[randomArray[2]]]);

    }


}

function timerRun() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function timerStop() {
    clearInterval(intervalId);
}

function decrement() {

    //  Decrease time by one.
    time--;

    //  Update the time 
    $("#timer").text(time + " seconds left!");

    //  When run out of time...
    if (time <= 0) {
        timerStop();
        // alert("time's up!");
        console.log("Player ran out of time on question " + (questionCount));
    }
}

/*******************************************
 * Randomize array element order in-place. *
 * Using Durstenfeld shuffle algorithm.    *
 *******************************************/
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}



