// //Strings Methods

// //length property
// let name = ' Andrew Mead  '
// console.log(name.length)

// //upper case conversion
// console.log(name.toUpperCase())

// //lower case conversion
// console.log(name.toLowerCase())

// //incluces method
// let password = 'abc123password898'
// console.log(!password.includes('password'))

// //trim method
// console.log(name.trim())

//challenge

let isValidPassword = function(password){
    if(password.length <= 8 || password.includes('password')){
        return false
    } 
    else{
        return true
    }
      
}


console.log(isValidPassword('abc123'))
console.log(isValidPassword('dlfjlsdfls21$'))
console.log(isValidPassword('sldpassworddf'))
















