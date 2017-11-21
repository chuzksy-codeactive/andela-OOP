const Employee = require("./employee");
class CommissionEmployee extends Employee {
    constructor(firstName, lastName, ssn, sales = 0.0, rate = 0.0) {
        super(firstName, lastName, ssn);
        this._sales = sales;
        this._rate = rate;
    }
    getCommissionRate() {
        return this._rate;
    }

    setCommissionRate(value) {
        if (value >= 0.0) {
            this._rate = value;
        } else {
            throw "Sales must be >= 0.0";
        }
    }

    getGrossSales() {
        return this._sales;
    }

    setGrossSales(value) {
        if (value >= 0.0) {
            this.sales = value;
        } else {
            throw "Sales must be >= 0.0";
        }
    }

    // Overriding the earning method in the super class
    earnings() {
        return this.getGrossSales() * this.getCommissionRate();
    }

    // toString method used with different signature - polymorphism
    toString() {
        return `
            ${"Salaried Employee".toUpperCase()}
            Employee Information: ${super.toString()}
            ${"Salary Info".toUpperCase()}
                Gross Sales: ${this.getGrossSales()}
                Commission Rate: ${this.getCommissionRate()}
        `;
    }
}

module.exports = CommissionEmployee;