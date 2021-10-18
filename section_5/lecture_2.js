let myBook = {
    title : "A book",
    author : "Allen Bee",
    pageCount : 300

}

let otherBook = {
    title : "A Year",
    author : "Max ",
    pageCount : 320

}

let getSummary = function(book){

    return {
        summary : `${book.title} by ${book.author}`,
        pageCountSummary : `${book.title} is ${book.pageCount} pages long`
    }
    //console.log(`${book.title} by ${book.author}`)
}

let myBookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

// console.log(myBookSummary.summary)
// console.log(myBookSummary.pageCountSummary)

console.log(otherBookSummary.summary)
console.log(otherBookSummary.pageCountSummary)



//challenge

let tempConversion = function(tempFahrenheit){
    
    return {
         celcius : ((tempFahrenheit - 32) * 5 ) / 9,
         kelvin : ((tempFahrenheit + 459.67) * 5 ) / 9,
         fahrenheit : tempFahrenheit
    }
}

let temperature = tempConversion(74)

console.log(temperature.celcius)
console.log(temperature.kelvin)
console.log(temperature.fahrenheit)


