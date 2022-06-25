function divisible(num){
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
console.log(myNumber);