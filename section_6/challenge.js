const account = {
    name : 'Allen Bee',
    expenses : [],
    income : [],
    addExpense : function(description, amount){
        this.expenses.push({
            description : description,
            amount : amount
        })
    },
    addIncome : function(description, amount){
        this.income.push({
            description : description,
            amount : amount
        })

    },
    getAccountSummary : function(){
        let totalExpenses = 0
        let totalIncome = 0

        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount
        })

        this.income.forEach(function(income){
            totalIncome = totalIncome + income.amount
        })

        console.log(`${this.name} has ${totalExpenses} in expenses`)
        console.log(`${this.name} has a balance of ${totalIncome - totalExpenses}. ${totalIncome} in income. ${totalExpenses} in expenses`)
    }
  
}


account.addExpense('burger', 950)
account.addExpense('tea', 2)
account.addIncome('job',1000)localStorage
account.getAccountSummary()
