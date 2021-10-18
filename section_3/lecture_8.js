//logical AND and OR operators
// let temp = 4

// if(temp >= 25 && temp < 50){
//     console.log('you can go outside')
// }else if(temp <= 0 || temp >= 50){
//     console.log("do not go outside")
// }else{
//     console.log('Do what you want')
// }

// //logical operators have boolean on both sides
// (boolean && bollean)

let isGuestOneVegan = true
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan){
    console.log('only offer vegan dishes')
}else if(isGuestOneVegan || isGuestTwoVegan)
{
    console.log('make sure to offer up some vegan options')
}else{
    console.log('Offer anything in the menu')
}













