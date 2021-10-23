
const arr = [1, 2, 3, 4, 5];
let sum = 0;
let i = 0;
while ( i < arr.length) {
    sum += arr[i];
    i++;  
}
console.log(sum);

let sumSquare = 0;
i = 0;
while ( i < arr.length) {
    sumSquare += arr[i]**2;
    i++;  
}
console.log(sumSquare);