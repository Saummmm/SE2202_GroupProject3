class BudgetItem {
    constructor (amount, month, year) {
        let __amount__;
        let __month__;
        let __year__;

        this.setAmount = function(a) {
            __amount__ =  (a>=0) ? a:0;
        }
        this.getAmount = function() {
            return __amount__;
        }
        this.setMonth = function(m) {
            __month__ =  m;
        }
        this.getMonth = function() {
            return __month__;
        }
        this.setYear = function(y) {
            __year__ =  (y>=0) ? y:0;
        }
        this.getYear = function() {
            return __year__;
        }

        this.setAmount(amount);
        this.setMonth(month);
        this.setYear(year);
    }

}

module.exports = BudgetItem;