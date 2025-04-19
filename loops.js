// // es5 -- for , for in , for while
// // es6 -- for of 


// // for
// let myAge = 23;
// let totalYearPass ='';
// for(i =0 ; i<myAge ; i++){
//     totalYearPass+=[i]+',';
//     // console.log(i)
// }
// // console.log(totalYearPass);


// // for in
// let ages = [2,4,5,22];
// for(let x in ages){
//     let srialOfAge = ages[x];
//     // console.log(srialOfAge)
// }

// do while

// let text =" " ;
// let i = 0;
// do{
//    text+=i + ',';
//    i++;
// }
// while(i<5);
// console.log(text)


// for of
let names =['juwel','hridoy','akash'];
for(let name of names){
    console.log(name)
}