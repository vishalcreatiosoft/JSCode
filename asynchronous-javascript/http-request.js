
//Making HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e)=>{
    if(e.target.readyState === 4 && e.target.status === 200){
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    }else if(e.target.readyState === 4){
        console.log('An Error has taken place')
    }
})

request.open('GET','https://restcountries.com/v2/all')
request.send()



//lecture - 106

const countryCode = 'US'
const countryRequest = new XMLHttpRequest()

countryRequest.addEventListener('readystatechange',(e)=>{

        if(e.target.readyState === 4 && e.target.status === 200)
        {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country)=>{
                return country.alpha2Code === countryCode  
            })

            console.log(country.name)
        }
})

countryRequest.open('GET', 'https://restcountries.com/v2/all')
countryRequest.send()
