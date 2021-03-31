const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const FULL_TIME_HOUR = 8;
const PART_TIME_HOUR = 4;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;


function getWorkingHours(empCheck) {
    switch(empCheck) {
        case IS_FULL_TIME:
            return FULL_TIME_HOUR;
        case IS_PART_TIME:
            return PART_TIME_HOUR;
        default:
            return 0;
    }
}
let totalempHr = 0;
for (let days = 0;days <= NUM_OF_WORKING_DAYS;days++) {
    let checkEmp = Math.floor(Math.random() * 10) % 3;
    totalempHr += getWorkingHours(checkEmp);
}
let monthlyWage = totalempHr * WAGE_PER_HOUR;
console.log("Total Employee Hours: " + totalempHr + "\nMonthly Wage: " + monthlyWage);