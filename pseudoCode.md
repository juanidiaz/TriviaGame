#------------------------------------------------#
#                   VARIABLES
#------------------------------------------------#

# Objects
triviaElement       = Contain the question and the answerArray for that question
intervalId          = Holds setInterval that runs the stopwatch


# Arrays
questionArray       = All questions
answerArray         = All answers, each item has three values, item 0 is the correct one


# Integers
questionSet         = number of questions to pick
wins                = Correct answers
loss                = Incorrect answers
questionCount       = question counter
time                = stopwatch time
accuracy            = (([wins]/[questionCount]) * 100).toFixed(2) + `%`


# Strings
questionTxt         = text of the question
answer1             = text of first answer
answer2             = text of second answer
answer3             = text of third answer
responseMsg         = respond once user selection


# Boolean
gameMode            = If playing game TRUE
clockRunning        = Time runing

#------------------------------------------------#
# Initial state
- Page prints title
- Page prints instructions
- User sets the amount of questions from radio boxes
    + Options 10, 15 and 30
    + Set [questionSet] to the user input from initial mode.
- Page stays in this state until user clicks START
- No stats are shown here

# Game starts
- After START the screen clears and the stats are visible
    + Correct questions - [wins]
    + Incorrect questions - [lost]
- A GET READY timer [intervalId] of 5 seconds is presented... Upon GO! the first question is presented
- After 3 seconds (to read question) the answers show up
    + Question timer starts
    + if user clicks the CORRECT answer a congratulation message shows up.
    + if user clicks INCORRECT answer or runs out of time.
        - Inform of wrong answer
        - Show correct answer
- After 3 seconds show the next question and loops continues for all questions
- After all questions are done present stats in screen and ask to play again
- If select to play again go to `Initial State`.

# Select new questions
- Check if `questionCount` is greater than `questionSet`
    + TRUE - Go to final screen
    + FALSE - Continue
- Pick the question from the `questionArray[questionCount].question`.
- Get the answer text from `questionArray[questionCount].answerArray[]`.
- Randomly get the three values for each answer and display onto three buttons
- Display clock and start timer
- Increase [questionCount]

# Probe
- Stop timer 
- Check if time smaller than `1`
    + TRUE - Inform "Run out of time", increase [loss]
- Get the text of the button pressed
- Compare text to `answerArray[questionCount][0]`
    + TRUE - Inform "Correct Answer", increase [win]
    + FASLE - Inform "Wrong Answer", increase [loss]
- Select new question

# Timer click
- Inerval runs for 1 second (1,000 miliseconds) check
- If time smaller than 1
    + TRUE - Inform "Run out of time", increase [loss]
    + FALSE - update value of [time] and start new timer

# Final Screen
- Show statistics:
    + Correct questions - [wins]
    + Incorrect questions - [lost]
    + Accuracy percentage - [accuracy]
- Ask to play again
