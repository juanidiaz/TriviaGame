// VARIABLES --------------------------------------------

//      OBJECTS

var intervalId;

//      ARRAYS
questionArray = [];

//      STRINGS/CHAR
responseMsg = "";

//      NUMBER/INTEGER
questionSet = 20;
wins = 0;
loss = 0;
questionCount = 0;
time = 50;
accuracy = 0;


//      BOOLEAN
gameMode = false;
clockRunning = false;
isQuestion = false;

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
        shuffleArray(questionArray[questionCount].answerArray);

        // Write the 
        $("#ans1").text(questionArray[questionCount].answerArray[0]);
        $("#ans2").text(questionArray[questionCount].answerArray[1]);
        $("#ans3").text(questionArray[questionCount].answerArray[2]);
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



