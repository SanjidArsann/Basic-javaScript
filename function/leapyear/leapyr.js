function isThisLeapYear(year){
    //if the year is evenly divisible by 4 and not divisible by 100 or divisible by 400 then the year is leap year
    if((year % 4 == 0) && (year % 100 !== 0) || (year % 400 ==0)){
        return true;
    } 
    else{
        return false;
    }
}
const leapYear = isThisLeapYear(2100);
console.log(leapYear, 'is a leap year');