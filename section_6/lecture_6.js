//Searching arrays part 2

const person = [
    {
        firstName : 'Allen',
        age : 20 
    },{
        firstName : 'Max',
        age : 21
    },{
        firstName : 'Andrew',
        age : 27
    },{
        firstName : 'Vishal',
        age : 21
    }
]

//console.log(person)

// const findPerson = function(person, personName){
//     const index = person.findIndex(function(element, index){
//         return element.firstName.toLowerCase() === personName.toLowerCase()
//     })

//     return person[index]

// }
// const searchResult = findPerson(person, 'maxxx')
// console.log(searchResult)

// const searchResult = findPerson(person, 'vishal')
// console.log(searchResult)

const findPerson = function(person, personName){
    return  person.find(function(element, index){
        return element.firstName.toLowerCase() === personName.toLowerCase()
    })

    
}
const searchResult = findPerson(person, 'max')
console.log(searchResult)










