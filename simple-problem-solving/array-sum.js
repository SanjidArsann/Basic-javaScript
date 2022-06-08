// const arr = [2, 4, 6, 8];
// let sum= 0;
// for(let i = 0; i < arr.length; i++){
//     const element = arr[i];
//     sum = sum + element;
// }
// console.log(sum);

//array sum with function

function arraySum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

const arrayTotal = arraySum([2, 4, 6, 8]);
console.log(arrayTotal);

