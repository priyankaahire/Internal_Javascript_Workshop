

function add() {
    let sum = 0;
    console.log(Array.isArray(arguments)); //! False
    console.log(typeof arguments)          //* OBjects

    //% argumnets is object but still length is used to becuase 
    //% it is already providing length property
    for(let i=0; i<arguments.length; i++) {
        sum +=arguments[i];
        return sum;
    }
}

let result;
//* VARARGUS -> Vraiable numbe rof arguments (variaadict function)
result = add(1, 2, 3, 4, 5, 6, 7, 8);
console.log(result);


//! Arrow function do NOT have arguments object

const addArrow = (...rest) => {

    //% thsi is not arguments of arrow function
    //% but argumets from outside the function (lexical)

    //! There is NO 'this' arguments' in arrow function
    console.log(`argumnts ${arguments}`); //* OUTPUT argumnts [object Arguments] It will not display 1, 2, 3 as arguments
    console.log("this", this);  //* OUTPUT  {}

    //% ...rest operator come into the picture

    console.log("rest", rest);  //* OUTPUT [ 1, 2, 3 ]

}

console.log("outside", arguments);
addArrow(1, 2, 3);