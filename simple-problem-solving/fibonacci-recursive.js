function fibonacci(n){
    if(n == 0){
        return [0];
    }
    if(n == 1){
        return [0, 1];
    }
    return [fibonacci(n-1) + fibonacci(n-2)];
}

const myNumber = fibonacci(8);
console.log(myNumber);