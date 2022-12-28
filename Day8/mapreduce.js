//* If you want to become Object Oriented Prohrammer -> STOP using switch case/if-else ladder
//* if you want to become functional Programmer -> STOP writing loops and use pure functions

//! Typical 00 programmer's Thought process
const array = [11, 24, 46, 12, 34, 45];
let sum = 0;
for(let i=0; i<array.length; i++)
sum += array[i];
console.log("sum", sum);


//*        | Take thos array of multiple vales
//*        |
//*        |   | reduce it to a SINGLE output
//*        |   |           [11, 23, 46]
//*        |   |            |   | 
//* v  v   |   |            v   v
sum = array.reduce((first, element) => first + element);
//#     
console.log("reduce:",sum);
sum =   array.filter(element => {
                                element%2 == 0 ? console.log("Even no:", element) : '';
                                return element;
                                })
             .reduce((first, element) => first + element);
console.log("Sum of positive number:", sum);