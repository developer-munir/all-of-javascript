// 1. print even number 0 - 12
for (let i = 0 ; i <=10 ; i++){
    let numbers = i;
    if(numbers % 2 === 0 ){
        // console.log(numbers)
    }
}


// 2. Create a length converter function feet to inches  / inches to feet 
let getInches = (feet) => feet * 12 ;
// console.log(getInches(5));

let getFeet = (inches) => inches / 12 ;
// console.log(getFeet(5));


// 3. Calculate the sum of numbers within an array
const numbers = [3,4,2,5,2,5,8.5];
let getNumbersLength = numbers.length;
let sum = 0 ;
for(let i = 0 ; i < getNumbersLength ; i++){
    let getNumbers = parseFloat(numbers[i]);
    sum+= getNumbers;
}
// console.log(sum);