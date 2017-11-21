//game logic
$(document).ready(function() {
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "./assets/GoTtheme.mp3");

    // Theme Button
    $(".theme-button").on("click", function() {
        audioElement.play();
    });

    $(".pause-button").on("click", function() {
        audioElement.pause();
    });
    var wins = 0;
    var losses = 0;
    var guessesLeft = 0;
    var words = ["arya", "khaleesi", "daenarys", "bran", "stark"];
    var wordHint = {
        arya: "Young,spunky Stark",
        khaleesi: "Mother of Dragons",
        daenarys: "Of House Targarean",
        bran: "Third Eye On",
        stark: "We watch for Winter",
    }


    function gameStart() {
        guessesLeft = 15;
        $("#guessesLeft").html("You have " + guessesLeft + " guesses left")
        $("#lettersGuessed").html("Letters Guessed: ");
        //set function that hides word and displays it
        function hideWord() {
            for (var i = 0; i < wordString.length; i++) {
                hiddenLetters.push("_");

                document.getElementById("hiddenWord").innerHTML = hiddenLetters.join(' ');
            }
        }

        //create function for a win/loss
        function winCheck(wChecker) {

            if (wChecker.toString() === wordString.toString()) {
                alert("Winter Came");
                wins++;

                //document.getElementById("wins").innerHTML = "You have " + wins + " wins!";
                $("#wins").html("Wins: " + wins);
                gameStart();
            }
        }

        function gameOver(lChecker) {
            if (lChecker === 0) {
                alert("You suck Joffrey!!");
                losses = losses + 1;
                $("#losses").html("Losses: " + losses);

                gameStart();
            }
        }



        //game starts here

        //get a random word from array of options currentWord
        var index = Math.floor(Math.random() * words.length);
        var currentWord = words[index];
        console.log("current word is " + currentWord);

        //get and display correct hint
        var hint = wordHint[words[index]];
        console.log(hint);
        $("#hints").html(hint);


        //separate currentWord into it's own array of letters

        var wordString = currentWord.split("");
        console.log("new array is " + wordString);

        //create  function that creates a new empty array of -'s
        var hiddenLetters = [];
        hideWord();

        //get user input with onkeyup and compare input with wordString letters
        document.onkeyup = function(event) {

            var userKeyPress = event.key;
            userKeyPressCode = event.keyCode;

            if (userKeyPressCode >= 65 && userKeyPressCode <= 90) {
                $("#lettersGuessed").append(" " + userKeyPress);
                var foundIt = false;
                guessesLeft = guessesLeft - 1;
                document.getElementById("guessesLeft").innerHTML = "You have " + guessesLeft + " guesses left";

                for (var i = 0; i < wordString.length; i++) {
                    if (userKeyPress === wordString[i]) {
                        foundIt = true;

                        hiddenLetters[i] = userKeyPress;
                        document.getElementById("hiddenWord").innerHTML = hiddenLetters.join(' ');

                    }

                }
                //check for wins
                winCheck(hiddenLetters);
                //check for loss
                gameOver(guessesLeft);
            }

        }
    }

    gameStart();

})