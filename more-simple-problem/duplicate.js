/*  function removeDuplicate(names){

    const unique = [];
    
    for(const element of names){
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
const names = ['sanjid','sanju','sanjid','moshiur','rahman','sanju','moshiur'];
let myNames = removeDuplicate(names);
console.log(myNames);  */


function removeDuplicate(num){
    const unique = [];
    for(const element of num){
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

const number =[1,2,4,3,2,1,34,5,6,7,3,4,5,6,21,1,8,93,2,5,6,7,7,43,2,1,3,5];
let uniqueNumber = removeDuplicate(number);
console.log(uniqueNumber);