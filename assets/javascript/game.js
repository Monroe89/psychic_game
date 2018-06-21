//variables for game
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var yourGuess = [];
var computerChoice;

theGame();

function theGame() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var randomLetter = alphabet[Math.floor(Math.random() * 26)];
    var computerChoice = randomLetter;

    console.log(computerChoice); //test

    checkIfCorrect();
    function checkIfCorrect() {
            //Users key selection
        document.onkeyup = function (event) {
            //then turns it into a lowercase string.
            var userChoice = String.fromCharCode(event.keyCode).toLowerCase();


            //if statement to prevent user from choosing a key that's not a letter
            if (event.keyCode < 65 || event.keyCode > 90) {
                alert("Invalid Entry");

                //else/if statement to stop user from guessing a letter they already guessed
                //and to stop the guesses counter from being deducted for a previous guess
            } else if (yourGuess.indexOf(userChoice) >= 0) {
                alert("You already guessed that!");

                //if the user guesses correctly
            } else if (userChoice === computerChoice) {
                console.log("Hooray! You're a psychic! Victory!");

                alert("Hooray! You're a psychic! Victory!")
                wins = wins + 1;
                document.getElementById("your-wins").innerHTML = wins;

                resetGame();

            } else {
                guessesLeft = guessesLeft - 1;

                document.getElementById("guesses-left").innerHTML = guessesLeft;
                yourGuess.push(userChoice);

                console.log("Your guesses so far: " + yourGuess);

                document.getElementById("your-guesses").innerHTML = yourGuess;

                console.log("Guesses Left: " + guessesLeft);

                noGuessesLeft();
            }
        }
    }

    function resetGame() {
        guessesLeft = 12;
        yourGuess = []; //reset array so it's empty
        document.getElementById("guesses-left").innerHTML = guessesLeft; //reset display on screen
        document.getElementById("your-guesses").innerHTML = yourGuess; //reset display on screen
        theGame(); //restart the game with new computerChoice.

    }

    function noGuessesLeft() {
        if (guessesLeft === 0) {
            console.log("YOU LOSE."); //test
            alert("YOU LOSE!");
            losses = losses + 1
            document.getElementById("your-losses").innerHTML = losses;

            resetGame();

        } else {
            console.log("Incorrect. Try again"); //test
            checkIfCorrect();
        }

    }

}