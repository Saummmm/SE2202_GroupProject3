let BudgetItem = require('./BudgetItem.js');

class Expense extends BudgetItem{
    
    constructor(amount, month, year, destination, spender) {
        super(amount, month, year);

        let __destination__;
        let __spender__;

        this.setDestination = function(d) {
            __destination__ = d;
        }
        this.getDestination = function() {
            return __destination__;
        }
        this.setSpender = function(s) {
            __spender__ = s;
        }
        this.getSpender = function() {
            return __spender__;
        }

        this.setDestination = destination;
        this.setSpender = spender;
    }
}

module.exports = Expense;