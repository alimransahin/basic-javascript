function leapYear(year){
    let result;
if((year%4==0 && year%100!=0) || (year%400==0)){
     result=year+" is leap year";
}
else{
    result=year+" is not leap year";
}
return result;
}
 let year=leapYear(2040);
console.log(year);