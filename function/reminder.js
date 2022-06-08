function reminderNumber(num1, num2) {
    var modulus = num1 % num2;
    return modulus;
}
var firstNum = 10;
var secondNum = 3;
var remainingValue = reminderNumber(firstNum, secondNum);
console.log(remainingValue);