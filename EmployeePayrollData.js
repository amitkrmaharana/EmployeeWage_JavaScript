class EmployeePayrollData {

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name() { return this._name; }
    /**
     * @param {string} name
     */
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        }
        else throw 'Name is Incorrect!';
    }

    toString() {
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary +
            ", gender=" + this.gender + ", startDate=" + this.startDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 0;
try {
    employeePayrollData.name = "john";
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}

let newemployeePayrollData = new EmployeePayrollData(1, "Teresa", 30000, "F", new Date().toISOString().split('T')[0]);
console.log(newemployeePayrollData.toString());