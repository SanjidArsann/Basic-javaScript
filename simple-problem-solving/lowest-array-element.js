function lowestElement(numbers){
    lowest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < lowest){
            lowest = element;
        }
    }
    return lowest;
}
const ages = [-3, -2, -1, -4];
const younger = lowestElement(ages);
console.log(younger);