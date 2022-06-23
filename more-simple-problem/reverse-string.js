function reverseString(string){
    let reverse = '';
    for(const letter of string){
        reverse = letter + reverse;
    
    }
    return reverse;
}
const myString = 'i love myself';
const reversed = reverseString(myString);
console.log(reversed);
