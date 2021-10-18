//Problem 1



// let Addition = function(a,b)
// {
//     var sum = a+b
//     console.log(sum)
// }

// Addition(2,5)
// console.log(sum)


//Problem 2

// let Addition = function(a,b,c){
//     console.log(a+b+c)
// }

// Addition(1,2)            //NaN
//Addition(1,2,null)        //3
//Addition(1,2,undefined)   //NaN
//Addition('1','2')         //12undefined
//Addition('1','2',null)    //12null
//Addition('1','2',undefined) //12undefinded


//Problem 3

let myAge = 30
let age = 30

if(myAge === age){
    console.log('Strict Equal')
}else if(myAge <= age){
    console.log('equal')
} else if(myAge < age){
    console.log('Not Equal')
}else{
    console.log('Get Out')
}
