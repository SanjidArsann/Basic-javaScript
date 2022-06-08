function findOdd(n){
    let odd = [];
    for(let i = 0; i < n.length; i++){
        const element = n[i];
        if(element % 2 != 0){
            odd.push(element);
        }
    }
    return odd;
}

const myArray = findOdd([2,5,41,5,36,6,4,6,21,5]);
console.log(myArray);