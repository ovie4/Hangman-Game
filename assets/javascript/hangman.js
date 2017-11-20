//game logic
    $(document).ready(function() {

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


var guessesLeft=10;
var wins=0;
var losses=0;
console.log("You have "+guessesLeft+" guesses left");

var words = ["kaladin", "sanderson", "arya", "khaleesi"];

//get a random word from array of options currentWord


var currentWord = words[Math.floor(Math.random() * words.length)]
console.log("current word is " + currentWord);

//separate currentWord into it's own array of letters


var wordString = currentWord.split("");
console.log("new array is " + wordString);

//create  function that creates a new empty array of -'s
var hiddenLetters = [];
var hideWord = function() {
    for (var i = 0; i < wordString.length; i++) {
        hiddenLetters.push("_");
        console.log(hiddenLetters);
        document.getElementById("hiddenWord").innerHTML = hiddenLetters.join(' ');
    }
}

hideWord();



//hide the words in html?
console.log($("#hiddenWord"));
//$("#hiddenWord").html("-");

//get user input with onkeyup and compare input with wordString letters

document.onkeyup = function(event) {
    var userKeyPress = event.key;
    $("#lettersGuessed").append(" "+userKeyPress);
    var foundIt = false;
    guessesLeft = guessesLeft-1;
    	document.getElementById("guessesLeft").innerHTML = "You have "+guessesLeft+" guesses left!";
    	console.log(guessesLeft);
    for (var i = 0; i < wordString.length; i++){
        if (userKeyPress === wordString[i]) {
            foundIt = true;
            alert("You guessed a letter!");
            hiddenLetters[i] = userKeyPress;
            document.getElementById("hiddenWord").innerHTML = hiddenLetters.join(' ');
           
        }
        /*check if there are any more hidden letters and increase wins if not
        for (var i = 0; i < hiddenLetters.length; i++) {
        	if (hiddenLetters[i] != "-"){
        		alert ("Winter Came");*/

        	}
        }
        
    
    
    



//function to increase wins and increase losses

if(guessesLeft===0){
	alert("You suck Joffrey!!");
	var losses = losses +1;
	document.getElementById("losses").innerHTML = losses;
	console.log("you have "+losses+" losses")
}






//get number of letters in word using .length
//create for loop that creates as many dashes as there are letters

/* for (var i = 0; i < word.length; i++){
	
	append a new space each time loop runs
	$("#hiddenWord").append("<span>_</span>")

}*/


})