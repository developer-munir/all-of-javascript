// array methods 

// array length , array toString , array at , array pop ,array join , array push
// array shift , array concat , array unshift , array delete , array copyWithin ,
// array flat , array splice , array toSpliced ,array slice 

const names = ['Juwel','Rakib','Roni','Rana'];
// console.log(names.toString()) to string.........

// how to find the specific element in a array./ at() work to find specific element of a array.
// let getName = names[2]; this is a way to find element .
let getName = names.at(3) 
console.log(getName)

// join ()
console.log(names.join(' '));


// pop  + push  ---- in out last element of a array.

// let nameOutIn = names.pop();
let nameOutIn = names.push('Liza');
console.log(names)



//shift + unShift --- added out first element in a array.

// let inOut = names.shift();
let inOut = names.unshift('Liza');
console.log(names)


//concat + delete
const a = [3,4,2,5,2];
const b = [0,9,7,];
delete a[0];
console.log(a)
console.log(a.concat(b))

// merge 3 array 
console.log(names.concat(a,b));


// copy specific array element
let copyElement = a.copyWithin(3,0);
console.log(a);


// splice , slice 
let x = a.slice(0,1)
console.log(x)


const foods = ['banana','mango','egg'];
foods.splice(1,2,'rice','sweets');
console.log(foods)


let newFoods = foods.toSpliced(2,1);
console.log(newFoods)


// flatMap 
const marks = [3,5,2,5];
let markSum = marks.flatMap(mark => [mark + 1]);
console.log(markSum)