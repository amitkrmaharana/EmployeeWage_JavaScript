class EmployeePayrollData {
    id;
    name;
    salary;
    gender;
    startDate;

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name() { return this._name; }
    set name(name) {
        this._name = name;
    }

    toString() {
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary +
        ", gender=" + this.gender + ", startDate=" + this.startDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());


let newemployeePayrollData = new EmployeePayrollData(1, "Teresa", 30000, "F", new Date().toISOString().split('T')[0]);
console.log(newemployeePayrollData.toString());