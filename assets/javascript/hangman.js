//game logic

var words = ["kaladin", "sanderson", "arya", "khaleesi"];

//get a random word from array of options currentWord

var currentWord = words[Math.floor(Math.random()*words.length)]
console.log("current word is "+currentWord);

//separate currentWord into it's own array of letters

var wordString = currentWord.split("");
console.log("new array is "+wordString);

//send wordString to html/css? (class=hidden) so it can be styled

// hide everything with class=hidden 

//function hideLetters(word){



	


//}


//display underscores equal to word length
document.write(wordString);

//get user input with onkeyup and compare input with wordString letters

document.onkeyup = function(event){
	var keyPress = event.key;
	for(var i=0; i<wordString.length; i++)
		if(keyPress === wordString[i]){
			//alert("Hit");
			//display wordString[i];
			document.write(wordString[i]);
		}
		else{
			//alert("Miss");
		}
			
}



//if a hit, display where
//if not, guesses--