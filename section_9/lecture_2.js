 //Arrow Functions part 2


//arrow functions do not have access  arguments using arguments

    // const add  = (a,b)=>{
    //     console.log(arguments[0]+arguments[1]+arguments[2])
    // }
    // add (11,12,13)


    
 const car = {
    color : 'red',
    getSummary : ()=>{
        return `The car is ${this.color}`
    }

    // getSummary(){
    //     return `The car is ${this.color}`
    // }
    // getSummary : function(){
    //     return `The car is ${this.color}`
    // }
 }
 
console.log(car.getSummary())












