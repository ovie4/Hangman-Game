//choose theme

var word = "madonna

//use key events for letters the players will type

//use onkeyup for listening
//create variable for currentKeyPressed

//create loop that looks through an array
//compare value of currKeyPressed



//set variable to 0
var wins = 0

//if player wins
var playerWins = function(){
	wins++;
}

//Number of guesses remaining
//create var for guesses
//set var to 12(optional)
//if player misses, reduce by 1

//display letter user guessed
//get element by id
//append to that element

var lettersGuessed = function(userKeyPressed) {
	$("#letters-guessed").append("<span>"+ userKeyPressed+"</span>");
}

var letterPressHandler = function(e){
var usersGuessedLetter = e.key;
	//function- checks to see if letter is in word
	//if letter is in word,display it on screen
	//else if letter is NOT in the word
		//call decreaseGuesses function
		//call lettersGuessed function
		letterGuessed(usersGuessedLetter);

}


var wordArray = ["m","a","d","o","n","n","a"];
var blankWordArray = ["-","-",..];

//check through wordArray to see if a letter matches userKeyPressed
//if letter matches, blankWordArray[i] = userKeyPressed;


for (var i = 0;i <wordArray.length, i++){
	
	if (wordArray[i] == userKeyPressed) {
	blankWordArray[i] = userKeyPressed;
	innerHTML
	}
}





//create variable for the word
//display dash for each letter in word
//use .length to check length of word
//create for loop that puts as many dashes as there are letters
$(document).ready(function({
	for(var i = 0;i<word.length; I++){
	console.log("the loop ran");
	$("word-one").append(<span>"_"</span);
	}
}))