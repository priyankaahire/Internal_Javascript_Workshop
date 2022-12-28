//* Array Functional methods

const array = [11, 23, 24, 36];

//% Functional methods of Array
array.forEach(element => console.log(element));

const every = array.every(element => element > 30); 
console.log(`every:${every}`); 
//^ It always return a true n false but exicute each and every element of array.

const some = array.some(element => element % 2 == 0);
console.log(`some: ${some}`); 
//^ It always return the true n false 

const find = array.find(element => element == 23);
console.log(`find:`, find); 
//^ if not found return undefined other wise it will return the match number/match content

const findEl = array.find(element => element > 20 && element < 40);
console.log(`${findEl}`); 
//^ It is always return the first match and then stop the exicution if if get the match
//^ It will return undefined if not found other wise return the 1st element

const all = array.filter(element => (element > 20 && element < 40));
console.log(all); //^ It is return all [23, 36] 
//^ This one return empty [] if element is not found or condition is not match