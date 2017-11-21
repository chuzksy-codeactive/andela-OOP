const EmployeeDataService = require("./data-service/employee-data-service");
const employeeData = require("./data-service/employees-data");

let dataService = new EmployeeDataService();
let employeesinfo = dataService.loadEmployees(employeeData);

// console.log(dataService.commissionEmployee);
for (let hourlyEmployee of dataService.hourlyEmployees) {
    console.log(hourlyEmployee.toString());
}

for (let salaryEmployee of dataService.salaryEmployees) {
    console.log(salaryEmployee.toString());
}

for (let commEmployee of dataService.salaryEmployees) {
    console.log(commEmployee.toString());
}