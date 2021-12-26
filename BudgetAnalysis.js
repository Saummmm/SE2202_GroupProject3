const BudgetItem = require("./BudgetItem");
const Income = require("./Income");

class BudgetAnalysis{
    constructor(arrBud) {
        let __budgetItems__ = [];
        
        this.setBudgetItems = function (arr) {
            __budgetItems__  = arr;
        }
        this.addBudgetItem = function (b) {
            __budgetItems__.push(b)
        }
        this.getBudgetItemsBy = function (param) {
            let s = [];
            for (let b of __budgetItems__) {
                if (b.getMonth() == param || b.getYear() == param) {
                    s.push(b);
                }
            }
            return s;
        }
        this.getRevenueByTimePeriod = function(time) {
            let s = this.getBudgetItemsBy(time);
            return this.getAnyRevenue(s);
        }
        this.getAnyRevenue = function(data) {
            let total = 0;
            for (let d of data) {
                if (d instanceof Income)
                    total += d.getAmount();
                else
                    total -= d.getAmount();
            }
            return total;
        }

        this.setBudgetItems(arrBud);
    }
}

module.exports = BudgetAnalysis;