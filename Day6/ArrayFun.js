const array = [1, 2,3];
array['boo'] = "Yeah";
array[-1] = 5;
array[3] = 10;
array[7] = 17;

console.log("C for");
for(let i=0; i <array.length; i++)
console.log(`array[${i}]: ${array[i]}`);
console.log(`array["boo]: ${array["boo"]}`);

console.log(" for in ");
for(let index in array)
console.log(index, array[index]);

console.log(" for of ");
for(let value of array)
console.log(value);


