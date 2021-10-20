// console.log('hii')

// const ps = document.querySelectorAll('p')

// ps.forEach(function(paragraphText){
//    let text =  paragraphText.textContent.includes('the')
//    if(text){
//        paragraphText.remove()
//    }
// })



//add a new Element

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph)
 