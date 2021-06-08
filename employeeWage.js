console.log("**Welcome to Java Script EmployeeWage**");

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