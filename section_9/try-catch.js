//Type Checking using "typeof" and "throw"

// const getTip = (amount) => {
//     if(typeof amount === 'number')
//     {
//         return amount * .25
//     }
//     else
//     {
//         throw Error('argument must be a number')
//     }
// }

// try{
//     const result = getTip(10)
//     console.log(result)
// }catch(e){
//     console.log('catch bloack is running')
// }



//Challenge 


const gradeCalc = (score, totalScore) => {

    if(typeof score === 'number' || typeof totalScore === 'number')
    {
        const percent = (score/totalScore) * 100
        let letterGrade = ''

        if(percent >= 90){
            letterGrade = 'A'
        }else if(percent >= 80){
            letterGrade = 'B'
        }else if(percent >= 70){
            letterGrade = 'C'
        }else{
            letterGrade = 'D'
        }

        return `You got grade ${letterGrade} and ${percent}%`
    }
    else{
        throw Error('Argument must be of integer type')
    }
}


try{
    const result = gradeCalc('42',50)
    console.log(result)
}catch(e){
    console.log(e.message)
}



















