// array , array methods , array sort , array search , array lteration

// array 
const names = ['juwel','akash'];
// console.log(names[1])
names[1]='hridoy';
// console.log(names)
// console.log(names.length)

// access the last element of a array
let lastElement = names[names.length-1]
console.log(lastElement);


// array looping
let len = names.length;
printName = '';
for(i=0 ; i<len;i++){
    printName+=names[i]+',';
}
console.log(printName)

// add a new element in array
names [len]='abir';
// names[7]='rina'; [create emty elments in a array]
console.log(names);


//new array ()------------------------

const newNames = new Array('Juwel','Hridoy','Akash');  
console.log(newNames)
console.log(newNames.length)