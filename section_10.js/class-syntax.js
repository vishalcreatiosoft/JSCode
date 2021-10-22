class Person {
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    getBio(){
        let bio = `${this.firstName+' ' +this.lastName} is ${this.age} years old.${address}`
        return bio
    }

    setName(fullName){
        const names = fullName.split(' ')
        console.log(names[0])
        console.log(names[1])
    }

}

// const personOne = new Person('Vishal','Srivastava',21)
// console.log(personOne.getBio())

// const personTwo = new Person('Allen','Bee', 23)
// console.log(personTwo.getBio())


class Employee extends Person{

    constructor(address){
        super(address)
        
    }

}

const empOne = new Employee('Harshit', 'Saxena', 22, 'Delhi')
console.log(empOne.getBio())



