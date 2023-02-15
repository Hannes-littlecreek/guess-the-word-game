const guessedLetters = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const inProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining")
const remainingGuessSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];


// Display placeholder symbol for word
const placeholder = function (word) {
   const placeholders = [];
   for (const letter of word) {
    console.log(letter);
    placeholders.push("●");
   }
   inProgress.innerText = placeholders.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function(e) {
    e.preventDefault();
    message.innerText = "";
    const guess = letterInput.value;
    const goodGuess = validateInput(guess);

    if (goodGuess) {
        makeGuess(guess);
    }
        letterInput.value = "";
});

//Validate Input

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please enter only one letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please type only letters, no special characters or numbers."
    } else {
        return input;
    }
}

const makeGuess = function(guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter.";
    } else {
        guessedLetters.push(guess);
        console.log(gussedLetters);
    }
}