function celciusToFarenheit(celcius){
    let farenheit = (celcius * 9/5) + 32;
    return farenheit;
}

const myCelcius = celciusToFarenheit(5);
console.log(myCelcius);