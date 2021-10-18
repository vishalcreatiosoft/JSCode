//Looping over Arrays

 pets = [ 'Dogs', 'cats', 'horse', 'birds', 'elephant' ]
 console.log(pets)

//  pets.forEach(element => {
//      console.log(element)
//  });

// pets.forEach(function(item){
//     console.log(item)
// })

// pets.forEach((item)=>{
//     console.log(item)
// })

// pets.forEach(function(item, index) {
//     console.log(`index = ${index} || item = ${item}`)
    
// });


//the first argument pass is bydefault item of array
// and the second one is index of that array elements respectively

// pets.forEach(function(index, item){
//     console.log(`index = ${index} || item = ${item}`)
// })



//using callback function

pets.forEach(function(item, index){
    if(index == 0){
        console.log(item)
    }
    else if(index == 1){
        console.log(item)
    }
})























