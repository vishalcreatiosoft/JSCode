let myAccount = {
    name : 'Allen Bee',
    expenses : 0,
    income : 0
}

let otherAccount = myAccount
otherAccount.income = 1000
otherAccount.expenses = 500
otherAccount = {}


let addExpense = function(account, increament){
    //account = {}
    account.expenses = account.expenses + increament
    //console.log(account)
}

addExpense(myAccount, 100)
console.log(myAccount)