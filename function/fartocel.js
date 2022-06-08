function farToCelcius(farenheit){
    let celcius = (farenheit - 32) * 5/9;
    return celcius; 
}
const myFarenheit = farToCelcius(76);
console.log(myFarenheit);