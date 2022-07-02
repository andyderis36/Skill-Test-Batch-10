/*
Create solution function that accept 1 parameter that be will multiple number 3 and 5 while each result of that multiplication is still lower than parameter inputed

solution (10) // => 23 = 3 + 5 + 6 + 9
solution (20) // => 78 = 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18
*/

function sumOfMultiples(number) {    
    let sum = 0;    for(let i=1; i<number; i++) {        
      if(i % 3 === 0 || i % 5 === 0){            
        sum += i;        
    }    
}    
return sum;
}

let inputNumber = 30;     //input number here

console.log("solution ("+inputNumber+") // => "+sumOfMultiples(inputNumber));
document.write(sumOfMultiples(inputNumber));

