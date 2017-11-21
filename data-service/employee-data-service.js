const HourlyEmployee = require("../classes/hourlyEmployee");
const SalaryEmployee = require("../classes/salaryEmployee");
const CommissionEmployee = require("../classes/commissionEmployee");

class EmployeeDataService {
    constructor() {
        this.hourlyEmployees = [];
        this.salaryEmployees = [];
        this.commissionEmployee = [];
    }

    loadEmployees(employees) {
        for (let emp of employees) {
            if (emp.type === "hourlyEmployee") {
                //console.log(emp.type);
                let hourlyEmp = this.loadHourlyEmployee(emp);
                this.hourlyEmployees.push(hourlyEmp);
            }
            if (emp.type === "salaryEmployee") {
                //console.log(emp.type);
                const salaryEmp = this.loadSalaryEmployee(emp);
                this.salaryEmployees.push(emp);
            }
            if (emp.type === "commissionEmployee") {
                //console.log(emp.type);
                const commEmp = this.loadCommissionEmployee(emp);
                this.commissionEmployee.push(commEmp);
            }
        }
    }

    loadHourlyEmployee(e) {
        const hourlyEmployee = new HourlyEmployee(e.firstname, e.lastname, e.ssn, e.hourlyWage, e.hoursWorked);
        return hourlyEmployee;
    }
    loadSalaryEmployee(e) {
        const salaryEmployee = new SalaryEmployee(e.firstname, e.lastname, e.ssn, e.salary);
        return salaryEmployee;
    }
    loadCommissionEmployee(e) {
        const commissionEmployee = new CommissionEmployee(e.firstname, e.lastname, e.ssn, e.sales, e.rate);
        return commissionEmployee;
    }
}

module.exports = EmployeeDataService;