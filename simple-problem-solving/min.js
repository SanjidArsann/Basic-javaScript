/* let x = 100;
let y = 200;

const minValue = Math.min(x, y);
console.log(minValue); */



function findMinValue(first, second, third){
    if(first < second && first < third){
        return first;
    }
    else if(second < first && second < third){
        return second;
    }
    else{
        return third;
    }
    
}

let myNumber = findMinValue(5, 8, 9);
console.log(myNumber);