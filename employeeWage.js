console.log("Welcome To Employee Wage Computation program");
const IS_ABSENT = 0;
let checkEmp = Math.floor(Math.random() * 10) % 2;
if (checkEmp == 0) {
    console.log("Employee is Absent");
    return;
}
else 
    console.log("Employee is Present");