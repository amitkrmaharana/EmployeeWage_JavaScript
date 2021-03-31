console.log("Welcome To Employee Wage Computation program");
const IS_ABSENT = 0;
let checkEmp = Math.floor(Math.random() * 10) % 2;
if (checkEmp == IS_ABSENT)
    console.log("Employee is Absent");
else 
    console.log("Employee is Present");