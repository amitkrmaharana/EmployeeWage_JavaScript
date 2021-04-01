const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const FULL_TIME_HOUR = 8;
const PART_TIME_HOUR = 4;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOUR = 160;


function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_FULL_TIME:
            return FULL_TIME_HOUR;
        case IS_PART_TIME:
            return PART_TIME_HOUR;
        default:
            return 0;
    }
}

function calculateDailyWage(empHr) {
    return empHr * WAGE_PER_HOUR;
}

let totalempHr = 0;
let totalWorkingDays = 0;
let employeeDailyWagesArr = new Array();

while (totalempHr < MAX_WORKING_HOUR && totalWorkingDays < MAX_WORKING_DAYS) {
    let checkEmp = Math.floor(Math.random() * 10) % 3;
    let empHr = getWorkingHours(checkEmp);
    totalempHr += empHr
    employeeDailyWagesArr.push(calculateDailyWage(empHr));
    totalWorkingDays++;
}
let monthlyWage = totalempHr * WAGE_PER_HOUR;
console.log("Total Employee Hours: " + totalempHr + "\nTotal Working Days: " + totalWorkingDays + "\nMonthly Wage: " + monthlyWage);
console.log("Daily Wages are: \n" + employeeDailyWagesArr);