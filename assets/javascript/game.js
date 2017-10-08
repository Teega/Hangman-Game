//GLOBAL VARIABLES
//===================================================
//Variables
var wordsList = ["dog", "cat", "mouse", "falcon"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

//Game Counter
var winCount = 0;
var lossCount = 0; 
var guessesLeft = 9; 


//FUNCTIONS
//===================================================

function selectWord() {
	 selectWord = wordsList[Math.floor(Math.random() * wordsList.length)];
	 lettersinWord = selectWord.split("");
	 numBlanks = lettersinWord.length;
	
	 
	
	//Reset
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	//Populate blanks
	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}

document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("winCounter").innerHTML = winCount;
document.getElementById("lossCounter").innerHTML = lossCount;

	console.log(selectWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}

function checkLetters(letter){
	//check if letter exists in code at all
	

	var isLetterInWord = false;

	for (var i = 0; i < numBlanks; i++){
		if(selectedWord[i] == letter) {
			isLetterInWord = true;
			alert("letterfound");
		}
	}

}


//MAIN PROCESS
//===================================================


//Initiate the code the first time 
selectWord();

//register keyclicks

document.onkeyup = function(event){
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);

	//Testing / Debugging
	console.log(letterGuessed);
}
