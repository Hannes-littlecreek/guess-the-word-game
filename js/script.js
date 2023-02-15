const guessedLetters = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const inProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining")
const remainingGuessSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";


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
    const guess = letterInput.value;
        console.log(guess);
        letterInput.value = "";
});
