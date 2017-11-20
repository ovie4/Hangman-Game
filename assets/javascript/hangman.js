//game logic
$(document).ready(function(brah) {
	
	   
    //set function that hides word and displays it
    function hideWord() {
        for (var i = 0; i < wordString.length; i++) {
            hiddenLetters.push("_");
            console.log(hiddenLetters);
            document.getElementById("hiddenWord").innerHTML = hiddenLetters.join(' ');
        }
    }

    //create function for a win
    function winCheck(hmm) {

        if (hmm.toString() === wordString.toString()) {
            alert("Winter Came");
            wins++;
            console.log(wins);
            //restart game
            fullGame();

        }
    }
    //create function for loss
    function gameOver(bruh) {
        if (bruh === 0) {
            alert("You suck Joffrey!!");
            var losses = losses + 1;
            document.getElementById("losses").innerHTML = losses;
            console.log("you have " + losses + " losses");
        }
    }


    //press any key to get started

    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "./assets/GoTtheme.mp3");

    // Theme Button
    $(".theme-button").on("click", function() {
        audioElement.play();
    });

    $(".pause-button").on("click", function() {
        audioElement.pause();
    });


    var guessesLeft = 10;
    var wins = 0;
    var losses = 0;
    var words = ["kaladin", "sanderson", "arya", "khaleesi"];


  

    //get a random word from array of options currentWord
    var currentWord = words[Math.floor(Math.random() * words.length)];
    console.log("current word is " + currentWord);

    //separate currentWord into it's own array of letters

    var wordString = currentWord.split("");
    console.log("new array is " + wordString);

    //create  function that creates a new empty array of -'s
    var hiddenLetters = [];
    hideWord();

    //get user input with onkeyup and compare input with wordString letters
    document.onkeyup = function(event) {

        console.log(event);
        var userKeyPress = event.key;
        userKeyPressCode = event.keyCode;
        console.log(userKeyPressCode);
        if (userKeyPressCode >= 65 && userKeyPressCode <= 90) {
            $("#lettersGuessed").append(" " + userKeyPress);
            var foundIt = false;
            guessesLeft = guessesLeft - 1;
            document.getElementById("guessesLeft").innerHTML = "You have " + guessesLeft + " guesses left!";
            console.log(guessesLeft);
            for (var i = 0; i < wordString.length; i++) {
                if (userKeyPress === wordString[i]) {
                    foundIt = true;
                   
                    hiddenLetters[i] = userKeyPress;
                    document.getElementById("hiddenWord").innerHTML = hiddenLetters.join(' ');
                    console.log(hiddenLetters);
                    console.log(wordString);

                    //check for wins
                    winCheck(hiddenLetters);
                    //check for loss
                    gameOver(guessesLeft);



                }

            }

            //check that there are no more hidden letters and increase Wins
            /*for (var j = 0; j < hiddenLetters.length; j++) {
                if (hiddenLetters[j] != "-") {
                    alert("Winter Came");
                    wins = wins + 1;
                    console.log(hiddenLetters[j]);
                    console.log(wins);
                } else if (guessesLeft === 0) {
                    alert("You suck Joffrey!!");
                    var losses = losses + 1;
                    document.getElementById("losses").innerHTML = losses;
                    console.log("you have " + losses + " losses");
                }



            }*/
        }

    }

    

   


    //function to increase wins and increase losses








    //get number of letters in word using .length
    //create for loop that creates as many dashes as there are letters

    /* for (var i = 0; i < word.length; i++){
    	
    	append a new space each time loop runs
    	$("#hiddenWord").append("<span>_</span>")

    }*/


})