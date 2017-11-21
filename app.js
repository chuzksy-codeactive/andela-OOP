const EmployeeDataService = require("./data-service/employee-data-service");
const employeeData = require("./data-service/employee-data");

let dataService = new EmployeeDataService();
dataService.loadEmployees(employeeData);
for (let hourlyEmployee of dataService.hourlyEmployees) {
    console.log(hourlyEmployee.toString());
}

for (let commEmployee of dataService.commissionEmployees) {
    console.log(commEmployee.toString());
}



