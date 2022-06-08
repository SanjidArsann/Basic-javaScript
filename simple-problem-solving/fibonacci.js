// nth = (n-1) + (n-2)
// 10th = (10-1) + (10-2)

/* const fibo = [0, 1];
for(let i = 2; i <= 10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo); */

/* function fibonacciSeries(numbers){
    const fibo = [0, 1];
    for(let i = 2; i <= numbers; i++){
        fibo[i] = fibo[i - 1] + fibo[i -2];
    }
    return fibo
}

const fiboSeries = fibonacciSeries(13);
console.log(fiboSeries); */

// handle unexpected
function fibonacciSeries(numbers){
    if(typeof numbers != 'number'){
        return 'please enter a number'
    }
    if( numbers < 1){
        return 'please give greter than 1'
    }
    const fibo = [0, 1];
    for(let i = 2; i <= numbers; i++){
        fibo[i] = fibo[i - 1] + fibo[i -2];
    }
    return fibo
}

const fiboSeries = fibonacciSeries(0);
console.log(fiboSeries);