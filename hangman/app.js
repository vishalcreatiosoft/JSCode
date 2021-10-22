//Primitive Values : string, number, boolean, null, undefined

//Object : myObject -> Object.prototype -> null
//Array :  myArray -> Array.prototype -> null
//Function : myfunction -> Function.prototype -> Object.prototype - > null
//String : mystring -> String.prototype -> Object.prototype -> null
//Number : number -> number.prototype -> Object.prototype -> null
//Boolean : myBoolean -> Boolearn.prototype -> Object.prototype -> null




// const myArray = ['vishal', 'harshit', 'Allen']
// console.log(myArray.hasOwnProperty(length))

// const getScore = () => 1
// console.log(getScore)

//const product = 'Computer'
// console.log(product.split(''))

// const otherProduct = new String('Phone')
// console.log(otherProduct)

//hangman code part 3

const puzzleEl = document.querySelector('#puzzle')
const guessuesEl = document.querySelector('#guesses')
const game1 = new Hangman('Cat', 2)
puzzleEl.textContent = game1.getPuzzle()
guessuesEl.textContent = game1.remainingGuessess


window.addEventListener('keypress',(e)=>{
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)  
    //console.log(game1.getPuzzle())
    //console.log(game1.remainingGuessess)
    puzzleEl.textContent = game1.getPuzzle()
    guessuesEl.textContent = game1.remainingGuessess

})