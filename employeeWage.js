console.log("**Welcome to Java Script EmployeeWage**");

/*
//UC1: Check employee is absent or present

const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2; // get random number 0 or 1
if(empCheck == IS_ABSENT){
	console.log("Employee is Absent");
}
else{
	console.log("Employee is present");
}


//UC2: Calculte Daily Employee Wage using switch case

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch(empCheck){
  case IS_PART_TIME:
	  empHrs = PART_TIME_HOURS;
	  break;

	case IS_FULL_TIME:
		empHrs = FULL_TIME_HOURS;
		break;
		
	default:
		empHrs = 0;
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Daily Employee Wage: " +empWage);  


//UC3: Write Function for Daily Working Hours
//Function to calculate Daily working Hours
function getWorkingHours(empCheck){
switch(empCheck){
	case IS_PART_TIME:
		return PART_TIME_HOURS;
	
	  case IS_FULL_TIME:
		  return FULL_TIME_HOURS;
		  
	  default:
		  return 0;
	}
}
console.log("Daily Employee Wage: " +empWage);


//UC4: Calculate Wage for Month
const NUM_OF_WORKING_DAYS = 20;
for(let day = 0; day < NUM_OF_WORKING_DAYS; day++){
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
let empWage1 = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs: " +empHrs+ " Emp Wage: " + empWage1);


//UC5: Calculating the Wage till number of Working Days
const MAX_HRS_IN_MONTH = 100;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS ){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
 
}
let empWage2 = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Days: " +totalWorkingDays+ " Total hrs: " +totalEmpHrs+ " Emp Wage: " +empWage2 );


//UC6: calculate Employee wage till number of working Days using array
function calcDailyWage(emphrs){
        return empHrs * WAGE_PER_HOUR;
    }

let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH
	&& totalWorkingDays < NUM_OF_WORKING_DAYS){
		totalWorkingDays++;
		let empCheck = Math.floor(Math.random() * 10) % 3;
		let empHrs = getWorkingHours(empCheck);
		totalEmpHrs= empHrs;
		empDailyWageArr.push(calcDailyWage(empHrs));
	}
	let empWage3 = calcDailyWage(totalEmpHrs);
	console.log("Total Days: " + totalWorkingDays +
				"  Total Hrs: " + totalEmpHrs + "  Emp Wage: " +empWage3);


//Array Helper function
//UC 7A - calc total wage using Array forEach traversal or reduce method

let totEmpWage = 0 ;
function sum (dailyWage){
totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays + "Total Hrs: " + totalEmpHrs + "Emp Wage: " + totEmpWage);

function totalWages(totalWage, dailyWage){
	return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

//UC 7B - show the day along with Daily eage using Array map helper function

let dailyCntr = 0;
function mapDauwithWage(dailyWage){
	dailyCntr++;
	return dailyCntr + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDauwithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);


//UC 7C - Show Days when full time wage of 160 were earned
function fulltimeWage(dailyWage){
	return dailyWage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage When Fulltime Wage Earned");
console.log(fullDayWageArr);

//UC7D - Find the first occurrence when full Time earned using find function

function findFulltimeWage(dailyWage){
	return dailyWage.includes("160");
}

console.log("UC7D - First time Fulltime wage was earned on Day: "+ mapDayWithWageArr.find(fulltimeWage));

//UC 7E - check if Every Element of Full Time wage is truely holding fukk time wage
function isAllFulltimeWage(dailyWage){
	return dailyWage.includes("160");
}

console.log("UC 7E - check All Element have full Time Wage: " +
fullDayWageArr.every(isAllFulltimeWage));


//UC 7F - check if there is any Part time wage
function isAnyPartTimeWage(dailyWage){
	return dailyWage.includes("80");
}

console.log("UC 7F - check if any Part time wage: "+ mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G - Find the number of days the Employee Worked
function totalDaysWorked(numofDays, dailyWage){
	if(dailyWage > 0) return numofDays+1;
	return numofDays;
}
	
	console.log("UC 7G - Number of Days Emp Worked: "+ empDailyWageArr.reduce(totalDaysWorked,0));

//UC8:Store Day and DailyWage along total wage using map 
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let empHrs = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;


let empDailyWageArr = new Array();
let empDailyWageMap = new Map();

function calcDailyWage(empHrs){
        return empHrs * WAGE_PER_HOUR;
    }

while (totalEmpHrs <= MAX_HRS_IN_MONTH
	&& totalWorkingDays < NUM_OF_WORKING_DAYS){
		totalWorkingDays++;
		let empCheck = Math.floor(Math.random() * 10) % 3;
		let empHrs = getWorkingHours(empCheck);
		totalEmpHrs += empHrs;
		empDailyWageArr.push(calcDailyWage(empHrs));
		empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
	}

function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        
         case IS_FULL_TIME:
             return FULL_TIME_HOURS;
              
         default:
             return 0;
		}
}

console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage){
	return totalWage + dailyWage;
}
console.log("UC8 - Emp Wage Map totalHrs : " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
*/

//UC9:Arrow Function

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let empHrs = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;


let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
function calcDailyWage(empHrs){
        return empHrs * WAGE_PER_HOUR;
    }

while (totalEmpHrs <= MAX_HRS_IN_MONTH
	&& totalWorkingDays < NUM_OF_WORKING_DAYS){
		totalWorkingDays++;
		let empCheck = Math.floor(Math.random() * 10) % 3;
		let empHrs = getWorkingHours(empCheck);
		totalEmpHrs += empHrs;
		empDailyWageArr.push(calcDailyWage(empHrs));
		empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
		empDailyHrsMap.set(totalWorkingDays,empHrs);
	}

function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        
         case IS_FULL_TIME:
             return FULL_TIME_HOURS;
              
         default:
             return 0;
		}
}

console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage){
	return totalWage + dailyWage;
}

const findTotal = (totalval, dailyval) => {
	return totalval + dailyval;
}

let count =0;
let totalHours = Array.from(empDailyHrsMap.values()).filter(dailyHours => dailyHours > 0).reduce(findTotal,0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal,0);

console.log("Uc9 - Emp Wage with Arraow: " + " Total Hours: " + totalHours + " Total Wages: "+ totalSalary);


let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value,key,map) => {
	if(value == 8) fullWorkingDays.push(key);
	else if(value == 4) partWorkingDays.push(key);
	else nonWorkingDays.push(key);
});

console.log("Full Working Days: " +fullWorkingDays);
console.log("Part Working Days: " +partWorkingDays);
console.log("Non Working Days: " +nonWorkingDays);