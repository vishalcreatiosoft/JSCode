class Person {
    constructor(name, company){
        this.name = name
        this.company = company
    }


    getData(){
        console.log(`${this.name} works in ${this.company}`)     

        const Experience = function(){
            console.log(`${this.name} has 0 years of experience`)
        }
        return Experience
    }

    getDetail = ()=> {
        console.log(`${this.name}  joined as fresher`)
    } 

}

const personOne = new Person('vishal','Creatiosoft')
//personOne.getData()
//personOne.getDetail()

const experience = personOne.getData()
experience()



