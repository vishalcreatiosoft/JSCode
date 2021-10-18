//number methods

let num = 102.0884
// console.log(num)
// console.log(num.toFixed(2))
// console.log(num.toFixed(6))
// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))


//Random No.

// let randomNum = Math.random()
    // gives between (0 - .9999)

// console.log(randomNum)
// let min = 10
// let max = 20

// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// console.log(randomNum)

//challenge

let makeGuess = function(number){
    let min = 1
    let max = 5

    let randomNum =  Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randomNum)
    // if(number === randomNum){
    //     return true
    // }
    // else{
    //     return false
    // }

    return number ===randomNum
}

console.log(makeGuess(2))
