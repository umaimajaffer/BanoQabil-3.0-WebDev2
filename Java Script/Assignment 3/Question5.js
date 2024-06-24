//Guess game: 
//Store a secret number (ranging from 1 to 10) in a variable. 
//Prompt user to guess the secret number. 
//a. If user guesses the same number, show “Bingo! Correct answer”. 
//b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 
let num1 = 8
let guessnum = prompt("Enter the guessing number");
if(guessnum == num1){
alert("Bingo! correct answer");
}
else if(guessnum == num1 + 1){
alert("Close enough to the correct answer")
}
