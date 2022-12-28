'use strict';

function one() {
    const varOne = 1;
    console.log({varOne});
    //console.log({varTwo}); // ! varTwo Not Defined
}

function two() {
    const varTwo = 2;
    one();
    console.log({varTwo});
    //console.log({varOne});       //!varOne not defined
}

two();


//* JS allows nested (inner) function

function outer() {
    //% Lexical scope for inner()
    const outerVar = 1;             //? Not GLOBAL
    console.log({outerVar});

    //% Lexical scope ends for inner()
    function inner() {
        const innerVar = 2;

        //%JS captures the variables from lexical scope -> closure
        console.log({innerVar, outerVar});     //? How did this access outerVar>
    }

    inner();
}

outer();