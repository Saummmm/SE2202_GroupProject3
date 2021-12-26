const BudgetItem = require("./BudgetItem");

class Income extends BudgetItem {

    constructor(amount, month, year, source) {
        super(amount, month, year)

        let __source__;

        this.setSource = function(s) {
            __source__ = s;
        }
        this.getSource = function() {
            return __source__;
        }

        this.setSource(source);
    }
}

module.exports = Income;