//Variable Scope part-1
//Global Scope - Defined outside all code blocks
//Local Scope - Defined inside a code block

//Global Scope (varOne)
    //Local Scope (varTwo)
        //Local Scope(varThree)
    //Local Scope(varfour)

let varOne = 'varOne'

// if(true){
//     console.log(varOne);
//     let varTwo = 'varTwo'
//     console.log(varTwo);
// }
// console.log(varOne)
// console.log(varTwo)

if(true){
    console.log(varOne)
    const varTwo = 'varTwo'
    console.log(varTwo)

    if(true){
        const varThree = 'varThree'
        console.log(varThree)
    }

}
if(true){
    const varFour = 'varFour'
    console.log(varFour)
}


















