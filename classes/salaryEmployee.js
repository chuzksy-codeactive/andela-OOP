const Employee = require(".employee");

//SalaryEmployee class extends class Employee.
class SalaryEmployee extends Employee {
    constructor(firstName, lastName, ssn, salary = 0.0) {
        super(firstName, lastName, ssn);
        this._salary = salary;
    }
    getWeeklySalary() {
        return this._salary;
    }
    setWeeklySalary(value) {
        if (value >= 0.0) this._salary = value;
        else throw "Salary must be >= 0.0";
    }

    // Overriding the earning method in the super class
    earnings() {
        return this.weeklySalary();
    }

    // toString method used with different signature - polymorphism
    toString() {
        return `
            ${"Salaried Employee".toUpperCase()}
            Employee Information: ${super.toString()}
            ${"Salary Info".toUpperCase()}
                Weekly Salary: ${this.getWeeklySalary()}
        `;
    }
}

module.exports = SalaryEmployee;