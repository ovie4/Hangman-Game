//game logic

//press any key to get started


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
        hiddenLetters.push("-");
        console.log(hiddenLetters);
    }
}
debugger;
hideWord();
//hide the words in html?
console.log($("#hiddenWord"));
//$("#hiddenWord").html("will this work");

//$("#hiddenWord").innerHTML(hiddenLetters);

//get user input with onkeyup and compare input with wordString letters

document.onkeyup = function(event) {
    var userKeyPress = event.key;
    for (var i = 0; i < wordString.length; i++)
        if (userKeyPress === wordString[i]) {
            alert("Well Done");
            //display wordString[i];
            hiddenLetters[i] == wordString[i];
           
        }
        
    else {

    	//make guesses--
        alert("Miss");
    }

}
console.log(hiddenLetters);



//if a hit, display where
//if not, guesses--

//create a var wins = 0 and increment by 1

//var playerWins= function(){
//	wins++
//}







//get number of letters in word using .length
//create for loop that creates as many dashes as there are letters

/* for (var i = 0; i < word.length; i++){
	
	append a new space each time loop runs
	$("#hiddenWord").append("<span>_</span>")

}*/