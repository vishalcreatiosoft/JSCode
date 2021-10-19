//Filtering Arrays

// const notes = [
//     {
//         title : 'My next trip',
//         body : 'I would like to go to Spain'
//     },
//     {
//         title : 'Habbits to work on',
//         body : 'Exercise, Eating a bit better'
//     },
//     {
//         title : 'Office modification',
//         body : 'to Get a new seat'
//     }
// ]


// const findNote = function(notes, query){

//     return notes.filter(function(note, index){
//         const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//         const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//         return isBodyMatch || isTitleMatch
//     })
// }


// console.log(findNote(notes, 'exercise'))




// const filteredNotes = notes.filter(function(note, index){
//     const isTitleMatch = note.title.toLowerCase().includes('to')
//     const isBodyMatch = note.body.toLowerCase().includes('to')
//     return isBodyMatch || isTitleMatch
// })

// console.log(filteredNotes)



//challenge

const todos = [
    {
        text : 'Order cat food',
        completed : true
    },
    {
        text : 'clean car',
        completed : false
    },
    {
        text : 'Buy Vegetables',
        completed : true
    },
    {
        text : 'Exercise',
        completed : true
    }

]




const findComplete = function(todos){

    return todos.filter(function(note){
        return isCompleted = (note.completed === true)
        
    })

}


console.log(findComplete(todos))






















