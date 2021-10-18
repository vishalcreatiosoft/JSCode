//reverse a number

let reverseNumber = function(number){
   no = number
   let i = 1;
   let lengthOfNumber = number.toString().length
   while(i < lengthOfNumber){

    let remainder =  no % 10
    let revNumber = revNumber * 10 + remainder
    let number = number / 10 
    i++
   }
   console.log(revNumber)
}


reverseNumber(1265)