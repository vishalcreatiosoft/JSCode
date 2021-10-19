//Sorting Arrays

const notes = [
    {
        title : 'My next trip',
        body : 'I would like to go to Spain'
    },
    {
        title : 'Habbits to work on',
        body : 'Exercise, Eating a bit better'
    },
    {
        title : 'Office modification',
        body : 'to Get a new seat'
    }
]

//see the documentation of sort method for return type <0,>0.===0

// const sortNotes = function(notes){
//     notes.sort(function(a,b){
//         if(a.title.toLowerCase() < b.title.toLowerCase()){
//             return -1
//         }else if(b.title.toLowerCase() < a.title.toLowerCase()){
//             return 1
//         }else{
//             return 0
//         }
//     })
// }

// sortNotes(notes)
// console.log(notes)


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
        completed : false
    },
    {
        text : 'Exercise',
        completed : true
    }

]


const sortCompleted = function(todos){

    todos.sort(function(a,b){
        if(a.completed === true && b.completed === false){
            return 1
        }else if(a.completed === false && b.completed === true){
            return -1
        }else{
            return 0
        }
    })

}


sortCompleted(todos)
console.log(todos)


















