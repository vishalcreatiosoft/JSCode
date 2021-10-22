//prototypal Inheritance

const Person = function(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName,
    this.age = age
}


Person.prototype.getBio = function(){
    return `${this.firstName} is ${this.age} years old`
}


const personOne = new Person('Andrew', 'Mead', 27)
const personTwo = new Person('Vishal','Srivastava',21)
// console.log(personOne)
// console.log(personTwo)

console.log(personOne.getBio())
console.log(personTwo.getBio())

