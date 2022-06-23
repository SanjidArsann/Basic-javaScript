function findEven(num){
    let even = [];
    for(let i = 0; i < num.length; i++){
        const element = num[i];
        if(element % 2 == 0){
            even.push(element);
        }
    }
    return even;
}
const arr = [2, 5,74,5,7,5,2,32];
const myNumber = findEven(arr);
console.log(myNumber);