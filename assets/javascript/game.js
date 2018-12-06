// VARIABLES --------------------------------------------

//      OBJECTS

var character1 = {
    name: "Han Solo",
    imageName: "solo",
    defeated: false,
    healthPoints: 120,
    attackPower: 7,
    counterAttackPower: 10,
}

var character2 = {
    name: "Master Yoda",
    imageName: "yoda",
    defeated: false,
    healthPoints: 130,
    attackPower: 9,
    counterAttackPower: 12,
}

var character3 = {
    name: "Princess Leia",
    imageName: "pleia",
    defeated: false,
    healthPoints: 140,
    attackPower: 11,
    counterAttackPower: 14,
}

var character4 = {
    name: "Darth Maul",
    imageName: "darthmaul",
    defeated: false,
    healthPoints: 150,
    attackPower: 13,
    counterAttackPower: 16,
}

var character5 = {
    name: "Darth Vader",
    imageName: "darthvader",
    defeated: false,
    healthPoints: 160,
    attackPower: 15,
    counterAttackPower: 18,
}

var character6 = {
    name: "Obi Wan Kenobi",
    imageName: "obiwan",
    defeated: false,
    healthPoints: 170,
    attackPower: 17,
    counterAttackPower: 20,
}

//      ARRAYS
charArray = [character1, character2, character3, character4, character5, character6];

//      STRINGS/CHAR
var charPlayer = "";        // Character selected to play as
var charDefender = "";      // Character selected to attack

//      NUMBER/INTEGER
var matches = 0;            // A match is to defeat ALL other characters
var attacks = 0;            // Each time the player attacks (no matter who) always increases
var wins = 0;               // Defeated characters pero MATCH
var loss = 0;               // If player gets defeated
var lossPlayer = 0;         // HPs lost by player in attack
var lossDefender = 0;       // HPs lost by defender in attack

//      BOOLEAN
var firstAttack = true;     // First attack on this character
var gameMode = false;

// ------------------------------------------------------------

$(document).ready(function () {

    // First load... lets play!
    gameMode = true;

    // Show stats of game (needs player and defender defined)
    function logStats() {

        console.log("----------------------")
        console.log("  PLAYER STATS")
        console.log("Name: " + charArray[charPlayer].name);
        console.log("HP: " + charArray[charPlayer].healthPoints);
        console.log("Attacks: " + attacks);
        console.log("Initial attack power: " + charArray[charPlayer].attackPower);
        console.log("Current attack power: " + (charArray[charPlayer].attackPower * attacks));
        console.log("----------------------")
        console.log("  DEFENDER")
        console.log("Name: " + charArray[charDefender].name);
        console.log("HP: " + charArray[charDefender].healthPoints);
        console.log("----------------------")
    }

    // Updates site... makes the pretty magic :)
    function updateScreen() {

        if (!gameMode) {
            gameEnd();
            return;
        }

        for (var i = 0; i < charArray.length; i++) {
            $("#charName" + (i + 1)).html("<h2>" + charArray[i].name + "</h2><p style=\"color:white;\">HP: " + charArray[i].healthPoints + "</p>");
            $("#charImage" + (i + 1)).attr("src", "./assets/images/" + charArray[i].imageName + ".png");
        }

        if (charPlayer === "") {         // INITIAL MODE

            // Add the fight stuff
            // $("#cards").html(" <div class=\"col-md-4\"> <div class=\"card mb-4 shadow-sm\" id=\"cardPlayer\" style=\"visibility:visible\"> <img class=\"card-img-top\" id=\"imagePlayer\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" src=\"https://placehold.it/225x225\"> <div class=\"card-body\"> <h3>Your character</h3> <strong class=\"d-inline-block mb-2 text-success display-4\" id=\"namePlayer\" style=\"text-align:right\">Player character</strong> <div class=\"d-flex justify-content-between align-items-center\"> <small class=\"text-muted\" id=\"hpPlayer\">HP: ??</small> </div> </div> </div> </div> <div class=\"col-md-4 align-self-center\" style=\"text-align: center;\"> <div class=\"btn-group\" id=\"attack\" style=\"visibility:visible\"> <div id=\"attackInfo\"> <p>You attacked <b>NOBODY</b> for <i>no</i> damage and suffered a <i>none</i> damage.</p> <p><button type=\"button\" class=\"btn btn-lg disabled btn-info\">ATTACK!</button></p> </div> </div> </div> <div class=\"col-md-4\"> <div class=\"card mb-4 shadow-sm\" id=\"cardDefender\" style=\"visibility:visible\"> <img class=\"card-img-top\" id=\"imageDefender\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" src=\"https://placehold.it/225x225\"> <div class=\"card-body\"> <h3>Defender</h3> <strong class=\"d-inline-block mb-2 text-danger display-4\" id=\"nameDefender\" style=\"text-align:right\">Attacked character</strong> <div class=\"d-flex justify-content-between align-items-center\"> <small class=\"text-muted\" id=\"hpDefender\">HP: ??</small> <div class=\"btn-group\"> <button type=\"button\" class=\"btn btn-sm btn-outline-danger\" id=\"change\">Change defender</button> </div> </div> </div> </div> </div>");

            // Populate game stat banner
            $("#statsName").html("Current selected character: <b>NONE SELECTED</b>");
            $("#statsHP").html("HP: <b>--</b>");
            $("#statsWins").html("Defender defeated: <b>" + wins + "</b>");
            $("#statsMatches").html("Games played: <b>" + matches + "</b>");
            $("#statsLoss").html("Games lost: <b>" + loss + "</b>");

            // Resetting game variables
            attacks = 0;
            for (var i = 0; i < charArray.length; i++) {
                charArray[i].defeated = false;
                $("#" + i).css("visibility", "visible");    // Show button
                $("." + i).css("visibility", "visible");    // Show info
            }

            // Changing look of buttons from GRAY to GREEN
            $(".roundBtn").text("Select as Player");
            $(".roundBtn").removeClass("disabled");
            $(".roundBtn").removeClass("btn-secondary");
            $(".roundBtn").removeClass("btn-danger");
            $(".roundBtn").addClass("btn-success");

            // Hiding both cards
            $("#cardPlayer").css("visibility", "hidden");
            $("#cardDefender").css("visibility", "hidden");

            // Hiding ATTACK button and info
            $("#attackInfo").html("");

            // Hide jumbotron
            $("#cards").css("display", "");

        }

        if (charPlayer !== "") {         // Only if a character has been set as player

            // Populate game stat banner
            $("#statsName").html("Current selected character: <b>" + charArray[charPlayer].name + "</b>");
            $("#statsHP").html("HP: <b>" + charArray[charPlayer].healthPoints + "</b>");
            $("#statsWins").html("Defender defeated: <b>" + wins + "</b>");
            $("#statsMatches").html("Games played: <b>" + matches + "</b>");
            $("#statsLoss").html("Games lost: <b>" + loss + "</b>");

            // Populate player's card

            // Displaying player's image
            $("#imagePlayer").attr("src", "./assets/images/" + charArray[charPlayer].imageName + ".png");

            // Displaying player's name
            $("#namePlayer").text(charArray[charPlayer].name);

            // Display player's health points
            $("#hpPlayer").text("HP: " + charArray[charPlayer].healthPoints);

            // Display player's card
            $("#cardPlayer").css("visibility", "visible");

            // Changing look of buttons from GREEN to RED
            $(".roundBtn").text("Set as defender");
            $(".roundBtn").removeClass("btn-success");
            $(".roundBtn").addClass("btn-danger");

            // Hide selected character as player from characterl list
            $("#" + charPlayer).css("visibility", "hidden");    // Hide button
            $("." + charPlayer).css("visibility", "hidden");    // Hide info

            // If a character has been defeated, update the healt points label
            for (var i = 0; i < charArray.length; i++) {
                if (charArray[i].defeated) {
                    $("#charName" + (i + 1)).html("<h2>" + charArray[i].name + "</h2><p style=\"color:red\">Defeated</p>");

                    $("#" + i).css("visibility", "hidden");
                    $("." + i).css("visibility", "visible");
                }
            }

        }

        if (charPlayer !== "" && charDefender !== "") {     // If both player and defender have been selected

            // Populate defender's card

            // Displaying defender's image
            $("#imageDefender").attr("src", "./assets/images/" + charArray[charDefender].imageName + ".png");

            // Displaying defender's name
            $("#nameDefender").text(charArray[charDefender].name);

            // Display defender's health points or "defeated"
            if (!charArray[charPlayer].defeated) {
                $("#hpDefender").text("HP: " + charArray[charDefender].healthPoints);
            }
            else {
                $("#hpDefender").text("Defeated");
            }

            // Display defender's card
            $("#cardDefender").css("visibility", "visible");

            // Hide selected character as defender from characterl list
            $("#" + charDefender).css("visibility", "hidden");    // Hide button
            $("." + charDefender).css("visibility", "hidden");    // Hide info

            // Hide all buttons
            $(".roundBtn").css("visibility", "hidden");

            // Show ATTACK button
            $("#attack").css("visibility", "visible");

            // Show attack stats
            if (firstAttack) {
                // If first attack just show button
                $("#attackInfo").html("<button type=\"button\" class=\"btn btn-lg btn-info\">ATTACK!</button></p>");
            }
            else {
                // If NOT the first attack show button and stats
                $("#attackInfo").html("<p>You attacked <b>" + charArray[charDefender].name + "</b> for <i>" + lossDefender + "</i> damage and suffered a <i>" + lossPlayer + "</i> damage.</p><p><button type=\"button\" class=\"btn btn-lg btn-info\">ATTACK!</button></p>");
            }
        }

        if (charDefender !== "") {

            if (charArray[charDefender].defeated) {

                // The crard will not show the heath ponts anymore
                $("#hpDefender").text("DEFEATED!");

                // Hide ATTACK button
                $("#attack").css("visibility", "hidden");
            }
        }
    }

    // Player has been defeated!
    function gameEnd() {


        if (wins == (charArray.length - 1)) {

            // Player wins game
            // alert("Player Wins game")

            // Increase matches counter
            matches++;

            $("#mainMessage").html("<h1>Winner!!</h1><h2>The force is strong with you <b>" + charArray[charPlayer].name + "</b></h2><p class=\"lead\">Contratulations! You have defeated all the characters!</p>");

        } else {

            // Player lose the game
            // alert("Your character " + charArray[charPlayer].name + " has been defeated by " + charArray[charDefender].name);

            // Increase loss counter
            loss++;

            $("#mainMessage").html("<h1>** GAME OVER **</h1><h2>The force was weak with you <b>" + charArray[charPlayer].name + "</b></h2><p class=\"lead\">Go... train and try again</p>");
        }

        // Reset basic variables
        charPlayer = "";
        charDefender = "";
        gameMode = true;

        // Reset values for all characters
        character1.healthPoints = 120;
        character1.attackPower = 7;
        character2.healthPoints = 130;
        character2.attackPower = 9;
        character3.healthPoints = 140;
        character3.attackPower = 11;
        character4.healthPoints = 150;
        character4.attackPower = 13;
        character5.healthPoints = 160;
        character5.attackPower = 15;
        character6.healthPoints = 170;
        character6.attackPower = 17;

        // Disable all buttons
        $(".roundBtn").addClass("disabled");

        // Show message board and hide cards
        $(".jumbotron").css("display", "");
        $("#cards").css("display", "none");
    }

    // Player clicks to select characters
    $(".roundBtn").on("click", function () {

        if (charPlayer === "") {
            // First character is the one to play as
            charPlayer = parseInt(this.id);
            console.log("Playing as: " + charArray[charPlayer].name);

            // Send player info
            console.log(charArray[charPlayer]);
        }
        else {
            // Any character selection is the one to attack
            charDefender = parseInt(this.id);
            console.log("Attacking: " + charArray[charDefender].name);

            // Send player info
            console.log(charArray[charDefender]);
        }

        updateScreen();
    });

    // Player clicks to attack a character
    $("#attack").on("click", function () {

        // Confirm the player and Defender characters have been set
        if (charPlayer !== "" && charDefender !== "") {

            // Checking if character has been defeated
            function isDefeated(who) {

                // Only if health points are under 1 
                if (charArray[who].healthPoints < 1) {

                    // Set character as "defeated"
                    charArray[who].defeated = true;

                    // If player has been defeated... GAME OVER
                    if (who === charPlayer) {

                        // Stop game
                        gameMode = false;
                    }

                    // If a defender character has been defeated
                    if (who === charDefender) {

                        // Increase win counter
                        wins++;

                        // If all characters have been defeated... YOU WIN
                        if (wins == (charArray.length - 1)) {

                            // Stop game
                            gameMode = false;
                        }

                        // Log who was defeated
                        console.log("Character " + charArray[charDefender].name + " has been defeated.");
                    }
                }
            }

            // Calculate the losses for every characters
            lossPlayer = charArray[charDefender].counterAttackPower;
            lossDefender = (charArray[charPlayer].attackPower * (attacks + 1));

            // Updating the health points for both characters
            charArray[charPlayer].healthPoints = charArray[charPlayer].healthPoints - lossPlayer;
            charArray[charDefender].healthPoints = charArray[charDefender].healthPoints - lossDefender;

            isDefeated(charPlayer);
            isDefeated(charDefender);

            // Log a detailed explanation of the calculation
            // console.log("Player loss: " + lossPlayer + "     ( " + charArray[charPlayer].healthPoints + " ) = Player HP - ( " + charArray[charDefender].counterAttackPower + " )");
            // console.log("Defender loss: " + lossDefender + "     ( " + charArray[charDefender].healthPoints + " ) = Defender HP - ( " + charArray[charPlayer].attackPower + " ) * ( " + attacks + " + 1 ) )");

            // Increase the attacks count
            attacks++;
            firstAttack = false;

            // Log the status of the two characters
            logStats();
        }
        else {
            // This case would never happen.. but just in case!
            alert("ERROR: Either a player or defender character have not been selected!")
        }
        updateScreen();

    });

    // Select another defenter character
    $("#change").on("click", function () {

        // Hide Defender's card
        $("#cardDefender").css("visibility", "hidden");

        // Return selected character as Defender to character list
        $("#" + charDefender).css("visibility", "visible");
        $("." + charDefender).css("visibility", "visible");

        // Show all buttons
        $(".roundBtn").css("visibility", "visible");

        // Show ATTACK button
        $("#attack").css("visibility", "hidden");

        // Clear selected Defender
        charDefender = "";

        firstAttack = true;

        updateScreen();
    });

    // Click play again once match is over
    $("#again").on("click", function () {

        // Hide jumbotron and show cards
        $("#cards").css("display", "");
        $(".jumbotron").css("display", "none");

        console.log("play again");

        updateScreen();
    });

    // // ============================================
    // // ===== USE THIS ONLY FOR TROUBLSHOOTING =====

    // // Manually update screen
    // $("#update").on("click", function () {
    //     updateScreen();
    // });

    // // Toggle the cards and jumbotron
    // var show = true;
    // $("#toggle").on("click", function () {
    //     console.log("Toggle: " + show);
    //     if (show) {
    //         // Show cards
    //         $("#cards").css("display", "");
    //         $(".jumbotron").css("display", "none");
    //         show = false;
    //     }
    //     else {
    //         // Show jumbotron
    //         $("#cards").css("display", "none");
    //         $(".jumbotron").css("display", "");
    //         show = true;
    //     }
    // });
    // // ============================================

    updateScreen();
});
