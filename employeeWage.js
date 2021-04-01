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

function sum(dailyWage) {
    totalEmpWage += dailyWage;
}

function totalWages(totalEmpWage, dailyWage){
    return totalEmpWage + dailyWage;
}
let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + " = " + dailyWage;
}

function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}

function partTimeWage(dailyWage) {
    return dailyWage.includes("80");
}

function totalDaysWorked(numOfDays, dailyWage) {
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}

let totalEmpWage = 0;
let totalempHr = 0;
let totalWorkingDays = 0;
let employeeDailyWagesArr = new Array();
let employeeDailyWageMap = new Map();
let employeeDailyHrsMap = new Map();

while (totalempHr < MAX_WORKING_HOUR && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let checkEmp = Math.floor(Math.random() * 10) % 3;
    let empHr = getWorkingHours(checkEmp);
    totalempHr += empHr
    employeeDailyWagesArr.push(calculateDailyWage(empHr));    
    employeeDailyHrsMap.set(totalWorkingDays, empHr);
    employeeDailyWageMap.set(totalWorkingDays, calculateDailyWage(empHr));
}
employeeDailyWagesArr.forEach(sum);
console.log("Total Employee Hours: " + totalempHr + "\nTotal Working Days: " + totalWorkingDays + "\nMonthly Wage: " + totalEmpWage);
console.log("Daily Wages are: \n" + employeeDailyWagesArr);

// iterate through array using reduce method in which totalWage function is called and starting the element from 0 value.
console.log("Employee Wage with reduce function: " + employeeDailyWagesArr.reduce(totalWages, 0));

let mapDayWithWageArr = employeeDailyWagesArr.map(mapDayWithWage);
console.log("Daily wage Map:\n" + mapDayWithWageArr);

let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("Daily Wage  filter when worked full time:\n" + fullDayWageArr)

console.log("First Full Time Wage day:\n" + mapDayWithWageArr[0]);

console.log("Check all Element have Full time wage:\n"
            + fullDayWageArr.every(fulltimeWage));

console.log("Check if any Part Time Wage:\n" + mapDayWithWageArr.some(partTimeWage));

console.log("Number of days Employee worked: " + employeeDailyWagesArr.reduce(totalDaysWorked, 0));

console.log(employeeDailyWageMap);
console.log("Employee Wage Map Total Wage: " + Array.from(employeeDailyWageMap.values()).reduce(totalWages,0));
console.log("Employee Wage Map Total Hours: " + Array.from(employeeDailyHrsMap.values()).reduce(totalWages,0));