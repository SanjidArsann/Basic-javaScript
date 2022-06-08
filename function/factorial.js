/*
3! = 3 x 2 x 1
4! = 4 x 3 x 2 x 1
*/
// var factorial = 1;
// for(let i = 1; i <= 7; i++){
//     factorial = factorial * i;
// }
// console.log(factorial);


// let factorial = 1;
// for(i = 1; i <= 3; i++){
//     factorial = factorial * i;
// }
// console.log(factorial);

// function factorial(num){
//     let fact = 1;
//     for(i = 1; i <= num; i++){
//         fact = fact * i;
//     }
//     return fact;
// }

// let myNumber = factorial(7);
// console.log(myNumber);
















// function factorial(num){
//     let fact = 1;
//     for(let i = 1; i <= num; i++){
//         fact = fact * i;
//     }
//     return fact;
// }

// const myNumber = factorial(7);
// console.log(myNumber);




// function getFactorial(num){
//     let fact = 1;
//     let i = 1;
//     while(i <= num){
//         fact = fact * i;
//         i++;
//     }
//     return fact;
// }

// const myNumber = getFactorial(7);
// console.log(myNumber);




// function getFactorial(num){
//     let fact = 1;
//     let i = num;
//     while(i >= 1){
//         fact = fact * i;
//         i--;
//     }
//     return fact;
// }

// const myFactorial = getFactorial(7);
// console.log(myFactorial);




function getFactorial(number){
    let factorial = 1;
    for(let i = number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}

const fact = getFactorial(3);
console.log(fact);


