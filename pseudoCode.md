#------------------------------------------------#
#                   VARIABLES
#------------------------------------------------#

# Objects
triviaElement       = Contain the question and the answerArray for that question
questionN           = questionN, one for each element on questionArray
intervalId          = Holds setInterval that runs the stopwatch


# Arrays
questionArray       = Array with all quesitons
answerArray         = All answers, each item has three values, item 0 is the correct one


# Integers
questionAvailable   = Size of `questionArray`
questionSet         = number of questions to pick
wins                = Correct answers
loss                = Incorrect answers
time                = question counter
timeForQuestion     = time set for question
timeBetweenQuestions= period between questions
questionCount       = question counter


# Strings


# Boolean
freshSlate          = Sets initial state
gameMode            = TRUE while answer running
clicked             = If an answer button has been clicked
tooSlow             = If running out of time when answering!


#------------------------------------------------#
# Initial state
- Page prints title
- User sets the amount of questions using the slider
    + Options from 5 to 50. Set's [questionSet]
    + Default value is 10
- Page stays in this state until user clicks `LETS PLAY!!!`
- No stats are shown here.

# Game starts
- After `LETS PLAY!!!` the question `questionArray` is created and shuffled.
- The first question is presented and the answers show up
    + Question timer starts
    + if user clicks the CORRECT answer the button turns GREEN.
        - Increase [wins]
    + if user clicks INCORRECT answer: the button turns GREEN.
        - The button turns RED and
        - the button with the correct answer turns YELLOW.
        - Increase [loss]
    + if timer runs to 00 before a click will behave as INCORRECT selection.
- After `timeBetweenQuestions` seconds show the next question and loops continues for all `questionSet` questions
- After all questions are done ap goes to "Final Screen" mode.

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
