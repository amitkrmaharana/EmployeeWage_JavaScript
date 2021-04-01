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
let employeeDailyHrsAndWagesArr = new Array();
while (totalempHr < MAX_WORKING_HOUR && totalWorkingDays < MAX_WORKING_DAYS) {
    let checkEmp = Math.floor(Math.random() * 10) % 3;
    let empHr = getWorkingHours(checkEmp);
    totalempHr += empHr
    totalWorkingDays++;
    employeeDailyHrsAndWagesArr.push(
        {
            dayNum: totalWorkingDays,
            dailyHours: empHr,
            dailyWage: calculateDailyWage(empHr),
            toString() {
                return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours +
                    ' And Wage Earned = ' + this.dailyWage
            },

        }
    );
}
console.log("Daily Hours Worked and Wage Earned: " + employeeDailyHrsAndWagesArr);

let totalWages = employeeDailyHrsAndWagesArr
    .filter(dailHrsAndWage => dailHrsAndWage.dailyWage > 0)
    .reduce((totalWage, dailHrsAndWage) => totalWage += dailHrsAndWage.dailyWage, 0);

let totalHours = employeeDailyHrsAndWagesArr
    .filter(dailHrsAndWage => dailHrsAndWage.dailyWage > 0)
    .reduce((totalWage, dailHrsAndWage) => totalWage += dailHrsAndWage.dailyHours, 0);

console.log("Total Hours: " + totalHours + " Total Wages: " + totalWages);

employeeDailyHrsAndWagesArr.filter(dailHrsAndWage => dailHrsAndWage.dailyHours == 8)
    .forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));

let partWorkingDaysStrArr = employeeDailyHrsAndWagesArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
    .map(dailHrsAndWage => dailHrsAndWage.toString());

console.log("Part Working Day Strings: " + partWorkingDaysStrArr);

let nonWorkingDaysStrArr = employeeDailyHrsAndWagesArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
    .map(dailHrsAndWage => dailHrsAndWage.dayNum);

console.log("Non Working Day Strings: " + nonWorkingDaysStrArr);