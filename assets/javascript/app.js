// VARIABLES --------------------------------------------

//      OBJECTS

var intervalId;

//      ARRAYS
questionArray = [];

//      STRINGS/CHAR


//      NUMBER/INTEGER
questionSet = 10;           // Default value if user doesn't change
wins = 0;
loss = 0;
questionCount = 0;
timeForQuestion = 50;
timeBetweenQuestions = 2;   // Time between questions [in seconds]

//      BOOLEAN
freshSlate = false;         // Sets initial state
gameMode = false;           // TRUE while answer running
clicked = false;            // If an answer button has been clicked
tooSlow = false;            // If running out of time when answering!

// ------------------------------------------------------------

$(document).ready(function () {

    // First time the app is loaded
    freshSlate = true;

    // Create the array with all available questions
    buildQuestionArray();

    // Used to find the index of the correct answer using `findIndex`
    function findAnswer(x) {
        return x === questionArray[questionCount].answer;
    }

    // Slide the bar to set the `questionSet` vaiable 
    $("#questionRange").on("input", function () {

        // Display selection
        $("#questionSet").html("<h1>" + this.value + " questions</h1>");

        // Update `questionSet` vaiable 
        questionSet = this.value;

    });

    // Start the game!
    $("#start").on("click", function () {

        // LETS PLAY!!
        gameMode = true;

        // Get the first question
        newQuestion();
    });

    // I liked it... lets play again!!
    $("#again").on("click", function () {

        // Reset variables to initial state
        wins = 0;
        loss = 0;
        questionCount = 0;

        // Shuffles question array
        shuffleArray(questionArray);


        // First time the app is loaded
        freshSlate = true;

        // LETS PLAY!!
        gameMode = false;

        updateScreen();
    });

    // User clicks any answer button
    $(".answer").on("click", function () {

        // No backsies!!!
        if (clicked) {

            // If a question has been selected exit
            return;
        }

        // Stop the clock
        timerStop();

        //console.log("Selection: " + this.innerHTML);

        if (this.innerHTML === questionArray[questionCount].answer) {
            // Correct answer !!!

            //console.log("Correct answer!")

            // Increase win counter
            wins++;

            // Mark correct answer in green
            $("#" + this.id).toggleClass("btn-light btn-success")
        }
        else {
            // Wrong answer !!!

            //console.log("wrong answer!")

            // Increase loss counter
            loss++;

            // Mark selection in red
            $("#" + this.id).toggleClass("btn-light btn-danger")

            // Find the index of the correct answer in the shuffled `answerArray`
            var correctIndex = questionArray[questionCount].answerArray.findIndex(findAnswer);

            // Mark correct answer in yellow
            $("#ans" + (correctIndex + 1)).toggleClass("btn-light btn-warning")
        }

        // No more answer can be clicked!
        clicked = true;

        // Hide the timer
        $("#timer").css("visibility", "hidden");

        // Wait some time before move to the next question
        setTimeout(newQuestion, timeBetweenQuestions * 1000);
    });

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

    // Not the first time
    freshSlate = false;

    // Allows the user to click buttons
    clicked = false;

    // Check if we displayed as many questions as requested
    if (questionCount == questionSet) {

        // Set end game mode and exit
        gameMode = false;
    }

    // Show the timer
    $("#timer").css("visibility", "visible");

    // Increase question counter
    questionCount++;

    // Start the question timer
    timerRun();

    updateScreen();
}

// Print the game screen
function updateScreen() {

    if (freshSlate) {
        // INITIAL STATE //

        // Show the welcome screen... hide everything else
        $("#welcome").css("display", "");
        $("#game").css("display", "none");
        $("#endOfGame").css("display", "none");

        return;
    }

    if (gameMode) {

        // Show the game screen... hide everything else
        $("#welcome").css("display", "none");
        $("#game").css("display", "");
        $("#endOfGame").css("display", "none");

        $(".answer").removeClass("btn-success");
        $(".answer").removeClass("btn-danger");
        $(".answer").removeClass("btn-warning");
        $(".answer").addClass("btn-light");

        // Log the quesiton array selected
        //console.log(questionArray[questionCount]);

        // Write the question number
        $("#questionTitle").text("Question " + questionCount);

        // Write the question
        $("#question").text(questionArray[questionCount].question);

        // Randomize answer order
        shuffleArray(questionArray[questionCount].answerArray);

        // Write the answers in the buttons
        $("#ans1").text(questionArray[questionCount].answerArray[0]);
        $("#ans2").text(questionArray[questionCount].answerArray[1]);
        $("#ans3").text(questionArray[questionCount].answerArray[2]);
    }
    else {
        // Log final stats
        console.log("All " + questionCount + " questions done");
        console.log("Correct answers: " + wins);
        console.log("Incorrect answers: " + loss);
        console.log("Accuracy: " + ((wins / (questionCount - 1)) * 100).toFixed(2) + "%");

        // Show the enOfGame... hide everything else
        $("#welcome").css("display", "none");
        $("#game").css("display", "none");
        $("#endOfGame").css("display", "");

        // Populate stats
        $("#stats").html("<b>Correct answers:</b> " + wins + "<br><b>Incorrect answers:</b> " + loss + "<br><b>Accuracy:</b> " + ((wins / (questionCount - 1)) * 100).toFixed(2) + "%");

    }
}

/********** ALL TIMER RELATED FUNCTIONS **********/
function timerRun() {

    // Set time of question
    time = timeForQuestion;

    // Set interval to 1 second
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function timerStop() {
    // Return clock to 00
    clearInterval(intervalId);
}

function decrement() {

    //  Decrease time by one.
    time--;

    //  Update the time 
    $("#timer").text(time + " seconds left!");

    //  When run out of time...
    if (time <= 0) {

        //  Update the time 
        $("#timer").text("Time up!");

        // Increase loss counter
        loss++;

        // Took too long!!!
        tooSlow = true;

        // Cant click now
        clicked = true;

        // Stop timer
        timerStop();

        // Wait some time before move to the next question
        setTimeout(newQuestion, timeBetweenQuestions * 1000);

        // Log "out of time" and question number
        console.log("Player ran out of time on question " + (questionCount));
    }
}
/*************************************************/

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


