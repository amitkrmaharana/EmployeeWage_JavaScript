class EmployeePayrollData {

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        }
        else throw 'Name is Incorrect!';
    }

    get id() { return this._id; }
    set id(id) {
        let idRegex = RegExp('^[1-9]{1}([0-9])*$');
        if (idRegex.test(id)) {
            this._id = id;
        }
        else throw 'Id is Incorrect!';
    }

    get salary() { return this._salary; }
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9]{1}([0-9])*$');
        if (salaryRegex.test(salary)) {
            this._salary = salary;
        }
        else throw 'Salary is Incorrect!';
    }

    get gender() { return this._gender; }
    set gender(gender) {
        let genderRegex = RegExp('^[M,F]{1}$');
        if (genderRegex.test(gender)) {
            this._gender = gender;
        }
        else throw 'Gender is Incorrect!';
    }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        let datePassed = new Date(startDate);
        let currentDate = new Date();
        if (currentDate > datePassed) {
            this._startDate = startDate;
        }
        else throw 'Start Date is Future Date!'
    }

    toString() {
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary +
            ", gender=" + this.gender + ", startDate=" + this.startDate;
    }
}

let newemployeePayrollData = new EmployeePayrollData(1, "Teresa", 30000, "F", new Date().toISOString().split('T')[0]);
console.log(newemployeePayrollData.toString());

try {
    newemployeePayrollData.startDate = "2021-05-20";
    newemployeePayrollData.gender = "H";
    newemployeePayrollData.id = 0;
    newemployeePayrollData.salary = 0;
    newemployeePayrollData.name = "john";
    console.log(newemployeePayrollData.toString());
} catch (e) {
    console.error(e);
}