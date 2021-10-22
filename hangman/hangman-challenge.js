



const Hangman = function(word, remainingGuessess){
    this.word = word.toLowerCase().split('')
    this.remainingGuessess = remainingGuessess
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ''

    this.word.forEach((letter)=>{
        if(this.guessedLetters.includes(letter) || letter === ' '){
            puzzle += letter
        }else{
            puzzle += "*"
        }
    })

    return puzzle
}


Hangman.prototype.makeGuess = function(guess){
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if(isUnique){
        this.guessedLetters.push(guess)
    }

    if(isUnique && isBadGuess){
        this.remainingGuessess--
    }

}



//const game1 = new Hangman('Cat',2)
// game1.makeGuess('c')
// game1.makeGuess('t')
// game1.makeGuess('z')
// console.log(game1.getPuzzle())
// console.log(game1.remainingGuessess)


//lecture -97 part 3

// const puzzleEl = document.querySelector('#puzzle')
// const guessuesEl = document.querySelector('#guesses')
// const game1 = new Hangman('Cat', 2)
// puzzleEl.textContent = game1.getPuzzle()
// guessuesEl.textContent = game1.remainingGuessess




// const game2 = new Hangman('New Jersey',4)
// // game2.makeGuess('w')
// //console.log(game2.getPuzzle())



// window.addEventListener('keypress',(e)=>{
//     const guess = String.fromCharCode(e.charCode)
//     game1.makeGuess(guess)  
//     //console.log(game1.getPuzzle())
//     //console.log(game1.remainingGuessess)
//     puzzleEl.textContent = game1.getPuzzle()
//     guessuesEl.textContent = game1.remainingGuessess

// })