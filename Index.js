let Expense = require('./Expense.js');
let Income = require('./Income.js');
let BudgetItem = require('./BudgetItem.js');
let BudgetAnalysis = require('./BudgetAnalysis.js');
let budgets = require('./budgets.json');
let fs = require('fs');

//transform data from json file --> an array
let budgetParse = function(data) {
    let budget = []
    let b;
    for (let d of data) {
        
        switch(d.type) {
            case undefined:
                b = new BudgetItem(d.amount, d.month, d.year);
                break;
            case "Income":
                b = new Income(d.amount, d.month, d.year);
                break;
            case "Expense":
                b = new Expense(d.amount, d.month, d.year);
        }
        console.log(b.getAmount())
        budget.push(b);
    }
    return budget;
}

//create a budget analysis object to analye the items
let b = new BudgetAnalysis();
b.setBudgetItems(budgetParse(budgets));

//creating a new 
let obj = []

//pushing objects to another array
obj.push({Time_Interval: 2018, revenue: b.getRevenueByTimePeriod('2018')})
obj.push({Time_Interval: 2019, revenue: b.getRevenueByTimePeriod('2019')})
obj.push({Time_Interval: 'Jan', revenue: b.getRevenueByTimePeriod('January')})
obj.push({Time_Interval: 'Feb', revenue: b.getRevenueByTimePeriod('February')})
obj.push({Time_Interval: 'March', revenue: b.getRevenueByTimePeriod('March')})
obj.push({Time_Interval: 'April', revenue: b.getRevenueByTimePeriod('April')})
obj.push({Time_Interval: 'May', revenue: b.getRevenueByTimePeriod('May')})
obj.push({Time_Interval: 'June', revenue: b.getRevenueByTimePeriod('June')})
obj.push({Time_Interval: 'July', revenue: b.getRevenueByTimePeriod('July')})
obj.push({Time_Interval: 'Aug', revenue: b.getRevenueByTimePeriod('August')})
obj.push({Time_Interval: 'Sept', revenue: b.getRevenueByTimePeriod('September')})
obj.push({Time_Interval: 'Oct', revenue: b.getRevenueByTimePeriod('October')})
obj.push({Time_Interval: 'Nov', revenue: b.getRevenueByTimePeriod('November')})
obj.push({Time_Interval: 'Dec', revenue: b.getRevenueByTimePeriod('December')})

//turning that array of objects into a json file
let json = JSON.stringify(obj);
fs.writeFile('./output.json', json, 'utf8', () => {console.log("JSON file created!")});