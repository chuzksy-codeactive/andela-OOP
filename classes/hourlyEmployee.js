const Employee = require("./employee");

// HourlyEmployee class extends class Employee.
class HourlyEmployee extends Employee {
    constructor(firstName, lastName, ssn, hourlyWage = 0.0, hoursWorked = 0.0) {
        super(firstName, lastName, ssn);
        this._hourlyWage = hourlyWage;
        this._hoursWorked = hoursWorked;
    }

    getWage() {
        return this._hourlyWage;
    }

    setWage(value) {
        if (value >= 0.0) this._hourlyWage = value;
        else throw "Hours worked must be >= 0.0 and <= 168.0";
    }

    getHours() {
        return this._hoursWorked;
    }

    setHours(value) {
        if (value >= 0.0 && value <= 168.0) this._hoursWorked = value;
        else throw "Hours worked must be >= 0.0 and <= 168.0";
    }

    // Overriding the earnings method in the super class
    earnings() {
        if (this._hours <= 40) {
            // no overtime
            return this.getWage() * this.getHours();
        }
        return `$${Math.abs(40 * this.getWage() + (this.getHours() - 40) * this.getWage() * 1.5).toFixed(2)}`;
    }

    // toString method used with different signature - polymorphism
    toString() {
        return `
            ${"Salaried Employee".toUpperCase()}
            Employee Information: ${super.toString()}
            ${"Salary Informaton".toUpperCase()}
                Hourly Wage: ${this.getWage()}
                Hours Worked: ${this.getHours()}
                Earned: ${this.earnings()}
        `;
    }
}

module.exports = HourlyEmployee;