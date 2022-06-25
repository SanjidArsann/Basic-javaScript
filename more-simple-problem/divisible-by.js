/* function divisible(num){
    if(num % 3 == 0 && num % 5 == 0){
        console.log('foobar');
    }
    else if(num % 3 == 0){
        console.log('foo');
    }
    else if(num % 5 == 0){
        console.log('bar');
    }
    
    else{
        console.log('Sorry! This number can not divisible by 3 or 5');
    }
}

const myNumber = divisible(16);
console.log(myNumber); */

for(let i = 1; i <= 50; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log('foobar');
    }
    else if(i % 3 == 0){
        console.log('foo');
    }
    else if(i % 5 == 0){
        console.log('bar');
    }
    
    else{
        console.log(i);
    }
}