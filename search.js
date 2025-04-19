//array search 
// indexOf(),lastIndexOf(),includes(),find(),findIndex()
// findLast(),findLastIndex()

// indexof , lastindexof

let numbers = [3,4,22,55,22];
console.log(numbers.indexOf(22));
console.log(numbers.lastIndexOf(22));

// includes
console.log(numbers.includes(1));

// find , findindex ,findlast ,findlastindex
let numFunc = (value,index,arr)=>{
    return value > 20
};

let firstNum = numbers.find(numFunc);
let firstNumIndex = numbers.findIndex(numFunc);
let findLast = numbers.findLast(numFunc);
let lastindex = numbers.findLastIndex(numFunc);
console.log(firstNum);
console.log(firstNumIndex);
console.log(findLast);
console.log(lastindex);

