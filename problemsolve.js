let myFunc = (x)=>{

    for(let i = 1 ; i <= x; i++){    
        
       let iLenght = i;
       let outPut = 
            (iLenght === 3 ) ? iLenght = 'Fizz' :  
            (iLenght === 5) ? iLenght = 'Bazz':
            (iLenght === 6) ? iLenght = 'Fizz':
            (iLenght === 9) ? iLenght = 'Fizz':
            (iLenght === 10) ? iLenght = 'Bazz':
            (iLenght === 12) ? iLenght = 'Fizz':
            (iLenght === 15) ? iLenght = 'FizzBazz':
             iLenght ;
       console.log(outPut)
       
    }
   
}
myFunc(15);


