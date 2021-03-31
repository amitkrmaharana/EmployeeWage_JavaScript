const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const FULL_TIME_HOUR = 8;
const PART_TIME_HOUR = 4;
const WAGE_PER_HOUR = 20;


function getWorkingHours(empCheck) {
    switch(checkEmp) {
        case IS_FULL_TIME:
            return FULL_TIME_HOUR;
        case IS_PART_TIME:
            return PART_TIME_HOUR;
        default:
            return 0;
    }
}
let empHr = 0;
let checkEmp = Math.floor(Math.random() * 10) % 3;
empHr = getWorkingHours(checkEmp);
let dailyEmployeeWage = empHr * WAGE_PER_HOUR;
console.log("Employee Hours: " + empHr + " Daily Wage: " + dailyEmployeeWage);