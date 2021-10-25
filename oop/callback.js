// const getScore = (num,callback)=>{
//     console.log(num)
//     callback()
// }

// callme = ()=>{
//     console.log('this is callback function')
// }

// getScore(4,callme)


const firstPromise = new Promise((resolve, reject)=>{
    if('a'){
        resolve(' promise is resolved')
    }else{
        reject('first promise is rejected')
    }
})

const secondPromise = new Promise((resolve, reject)=>{
    if('a'){
        resolve('Second promise is resolved')
    }else{
        reject('Second promise is rejected')
    }
})

//console.log(firstPromise)
// firstPromise.then((result)=>{
//     console.log(result)
// }).catch((res)=>{
//     console.log(res)
// })


const newfunc = async()=>{
    console.log('before promise')
    const result = await firstPromise
    console.log(result)
    const result2 = await secondPromise
    console.log(result2)
    console.log('after promise')
}

newfunc().catch((result)=>{
    console.log(result)
})