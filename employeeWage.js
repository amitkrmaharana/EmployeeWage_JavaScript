console.log("Welcome To Employee Wage Computation program");
{
    const IS_ABSENT = 0;
    let checkEmp = Math.floor(Math.random() * 10) % 2;
    if (checkEmp == 0) {
        console.log("Employee is Absent");
        return;
    }
    else 
        console.log("Employee is Present");
}

const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const FULL_TIME_HOUR = 8;
const PART_TIME_HOUR = 4;
const WAGE_PER_HOUR = 20;

let empHr = 0;
let checkEmp = Math.floor(Math.random() * 10) % 3;
switch(checkEmp) {
    case IS_FULL_TIME:
        empHr = FULL_TIME_HOUR;
        break;
    case IS_PART_TIME:
        empHr = PART_TIME_HOUR;
        break;
    default:
        empHr = 0;
}

let dailyEmployeeWage = empHr * WAGE_PER_HOUR;
console.log("Daily Wage is " + dailyEmployeeWage);