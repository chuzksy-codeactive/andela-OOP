//Employee super class
class Employee {
    // three-argument constructor
    constructor(firstName, lastName, ssn) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._socialSecurityNumber = ssn;
    }

    /* getters and setters making the instance variable private */
    getFirstName() {
        return this._firstName;
    }
    setFirstName(value) {
        this._firstName = value;
    }
    getLastName() {
        return this._lastName;
    }
    setLastName(value) {
        this._lastName = value;
    }
    getSocialSecurityNumber() {
        return this._socialSecurityNumber;
    }
    setSocialSecurityNumber(value) {
        this._socialSecurityNumber = value;
    }

    /* Return string representation of Employee object*/
    /* Overrideing object.toString */
    toString() {
        return `
                Employee Name: ${this.getFirstName()} ${this.getLastName()}
                Social Security Number: ${this.getSocialSecurityNumber()}
        `;
    }

    /* abstract method overridden by concrete subclasses */
    earnings() {
        // no implementation here
        return "Employee earnings goes here!";
    }
}

module.exports = Employee;