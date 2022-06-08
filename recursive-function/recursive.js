// 1! = 1
// 2! = 2 x 1
// 3! = 3 x 2!
// 4! = 4 x 3!
// 5! = 5 x 4!
// 6! = 6 x 5!
// n! = n x (n-1)!

function factorial(n){
    if(n == 1){
        return 1;
    }
    return n * factorial(n - 1);
}
const myNumber = factorial(7);
console.log(myNumber);

