let randomNumber = Math.floor(Math.random() * 9999) + 1;
let previousGuesses = [];

function checkGuess() {
    const guessInput = document.getElementById('guessInput').value;
    const result = document.getElementById('result');
    const prevGuesses = document.getElementById('previousGuesses');

    if (!guessInput) {
        result.textContent = 'Please enter a number!';
        return;
    }

    const guess = parseInt(guessInput);
    previousGuesses.push(guess);

    if (guess === randomNumber) {
        result.textContent = 'Selamat! Anda menebak dengan benar!';
        result.style.color = 'green';
        endGame();
    } else if (guess < randomNumber) {
        result.textContent = 'Terlalu rendah! Coba lagi.';
        result.style.color = 'red';
    } else {
        result.textContent = 'Terlalu tinggi! Coba lagi.';
        result.style.color = 'red';
    }

    prevGuesses.textContent = `Previous guesses: ${previousGuesses.join(', ')}`;
}

function endGame() {
    document.getElementById('guessInput').disabled = true;
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 9999) + 1;
    previousGuesses = [];
    document.getElementById('guessInput').disabled = false;
    document.getElementById('guessInput').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('previousGuesses').textContent = '';
}
