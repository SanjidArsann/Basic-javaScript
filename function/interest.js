function basedOnMyAmmound(Principal, rateOfInterest, timePeriod){
    let r = rateOfInterest / 100;
    let simpleInterest = Principal * r * timePeriod;
    return simpleInterest;
}
const mySimpleInterest = basedOnMyAmmound(1000, 5, 5);
console.log(mySimpleInterest);