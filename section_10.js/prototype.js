//prototypal Inheritance

const Person = function(firstName, lastName, age, likes = []){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes

}


Person.prototype.getBio = function(){
    let bio = `${this.firstName} is ${this.age} years old`

    this.likes.forEach((like) => {
        bio += `${this.firstName} likes ${like}`
    })
    return bio
}

Person.prototype.location = 'Lucknow'

Person.prototype.setName = function(fullName){
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const personOne = new Person('Andrew', 'Mead', 27, ['football','Tennis'])
const personTwo = new Person('Vishal','Srivastava',21)


// console.log(personOne)
// console.log(personTwo)
// console.log(personOne.getBio())
// console.log(personTwo.getBio())
// console.log(personTwo.location)

// console.log(personOne.getBio())





//lecture - 93  --> prototypical inheritence

// Person.prototype.getBio = function(){
//     return 'Hello World!'
// }


// console.log(personTwo.getBio())


// personTwo.getBio = function(){
//     return 'this function is intance function of personTwo'
// }

// console.log(personOne.getBio())
// console.log(personTwo.getBio())