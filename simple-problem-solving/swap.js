let first = 'sanjid';
let second = 'moshiur';
console.log(first, second);
//first APPROCH
// let temp = first;
// first = second;
// second = temp;

//destructuring
[first, second] = [second, first];
console.log(first, second);