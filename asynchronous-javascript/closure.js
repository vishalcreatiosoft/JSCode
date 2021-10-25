const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        //resolve('This promise is resolved')
        reject('This promise is rejected')
        reject('This promise is rejected') 
    },2000)
})


const fun = async()=>{

    console.log('Hello world')
    const result = await myPromise  
    console.log(result)
}

fun()









// myPromise.then((data)=>{
//     console.log(data)
// },(err)=>{
//     console.log(err)
// })

// myPromise.then((data)=>{
//     console.log(data)
// }).then(()=>{
//     console.log('Another promise statement')
// })
// .catch((result)=>{
//     console.log(result)
// })




