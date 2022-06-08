function evenOrOdd(number){
    if(number % 2 !== 0){
        return true;
    }
    return false;
}
var isThisOdd = evenOrOdd(11);
console.log('This number is Odd', isThisOdd);