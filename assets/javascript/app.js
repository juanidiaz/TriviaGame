// VARIABLES --------------------------------------------

//      OBJECTS

var intervalId;

//      ARRAYS
questionArray = [];

//      STRINGS/CHAR
responseMsg = "";

//      NUMBER/INTEGER
questionSet = 10;           // Default value if user doesn't change
wins = 0;
loss = 0;
questionCount = 0;
time = 50;


//      BOOLEAN
gameMode = false;           // During game
clockRunning = false;       // If running the timer
isQuestion = false;         // If the timer is used to time a question
clicked = false;            // If an answer button has been clicked

// ------------------------------------------------------------

$(document).ready(function () {


    // Create the array with all available questions
    buildQuestionArray();

    // Get the first question
    newQuestion();

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

        updateScreen();
    });

    // User clicks any answer button
    $(".answer").on("click", function () {

        if (clicked) {
            return;
        }

        // Stop the clock
        timerStop();

        console.log("Selection: " + this.innerHTML);

        if (this.innerHTML === questionArray[questionCount].answer) {
            // Correct answer !!!

            console.log("Correct answer!")

            // Increase win counter
            wins++;

            // Mark correct answer in green
            $("#" + this.id).toggleClass("btn-secondary btn-success")
        }
        else {
            // Wrong answer !!!

            console.log("wrong answer!")

            // Increase loss counter
            loss++;

            // Mark selection in red
            $("#" + this.id).toggleClass("btn-secondary btn-danger")

            // Find the index of the correct answer in the shuffled `answerArray`
            var correctIndex = questionArray[questionCount].answerArray.findIndex(findAnswer);

            // Mark correct answer in yellow
            $("#ans" + (correctIndex + 1)).toggleClass("btn-secondary btn-warning")
        }

        clicked = true;

        $("#timer").css("visibility", "hidden");


        setTimeout(newQuestion, 3000);
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

    // Allows the user to click buttons
    clicked = false;


    // Check if we displayed as many questions as requested
    if (questionCount === questionSet) {

        // Set end game mode and exit
        gameMode = false;

        // Log
        console.log("All " + questionCount + " questions done");
        console.log("Correct answers: " + wins);
        console.log("Incorrect answers: " + loss);
        console.log("Accuracy: " + ((wins / questionCount) * 100).toFixed(2) + "%");

        $("#stats").html("<b>Correct answers:</b> " + wins + "<br><b>Incorrect answers:</b> " + loss + "<br><b>Accuracy:</b> " + ((wins / questionCount) * 100).toFixed(2) + "%");

        return;
    }

    // Show the timer
    $("#timer").css("visibility", "visible");

    // Increase question counter
    questionCount++;

    console.log("===================================");
    console.log("Question #" + questionCount);

    // Start the question timer
    timerRun();

    updateScreen();
}

function updateScreen() {

    if (gameMode) {

        // INITIAL STATE //

        $(".col-8").html("<div><div id=\"timer\" style=\"visibility: hidden\">50 seconds left!</div></div><br><div><h2 id=\"questionTitle\">Question</h2><div id=\"question\">Question text goes here</div></div><br><div><button type=\"button\" class=\"btn btn-secondary btn-sm mb-3 answer\" id=\"ans1\">Answer1</button><br><button type=\"button\" class=\"btn btn-secondary btn-sm mb-3 answer\" id=\"ans2\">Answer2</button><br><button type=\"button\" class=\"btn btn-secondary btn-sm mb-3 answer\" id=\"ans3\">Answer3</button></div><div id=\"stats\" ></div>");

        $(".answer").removeClass("btn-success");
        $(".answer").removeClass("btn-danger");
        $(".answer").removeClass("btn-warning");
        $(".answer").addClass("btn-secondary");



        // Log the quesiton array selected
        console.log(questionArray[questionCount]);

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
}

function timerRun() {

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

        // Stop timer
        timerStop();

        // Log "out of time" and question number
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


