// Function Programmin

//% 1. Pure Function
function pure(a, b) {
    //* Does not use external data
    //* Does not use static
    return a + b;
}

console.log(pure(5, 7));
console.log(pure(5, 7));
console.log(pure(5, 7));
console.log(pure(5, 7));

//% 2. Impure Function
let c = 10;
function impure(a, b) {
 c+= a + b;
 return c;
}

console.log(impure(5, 7));
console.log(impure(5, 7));
console.log(impure(5, 7));
// class Account {
//     //static count = 0;
//     constructor(/* an, */ hn, bal) {
//        this.accountNumber = ++count; //! Impurity
//        this.balance = bal;
//        this.holderNmae = hn;
//     }
// }

//% 2 Higher order function
// ^ it higher order coz it is taking another function as param
function process(a, b, action) {

    const c = a + b;
   // console.log(c); //# this I want to decide outside
    action(c);
   // console.log("action", action);
    let result = action(c);
    console.log(result); //! It will display undefined, coz function is not return anything.
    return c;

}

//%3 Function in JS are 1st class citizens
// %  There are at par with other data types
function printIt(c) {
    console.log("I am printing: " + c);
}
function deleteIt(c) {
    console.log("I have deleted it: " +c);
}
process(5, 7, printIt); // This time i want to print it
process(5, 7, deleteIt) // this is Time I want to delete
process(5, 7, () => console.log("I am passing arrow function")); // this is Time I want to delete

function myPrint(e) {
    console.log("element", e);
}

//* array functional programming (higher order function)
//* |          |
//* v          |   v Passing
const array = [11, 23, 36];
array.forEach(element => console.log("element", element)); // iteriate on each element

//* v          |   v Passing a function to foreach v
array.forEach(myPrint);

//* v          |   v Passing a function (lamba) to foreach v
array.forEach((e) => console.log("lamba", e));
//or
//const myPrint  = e => console.log("element", e);

