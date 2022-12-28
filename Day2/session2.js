g = 10; //? inferred as number (GLOBAL Dict) //it is not Hoisted and tz so that will not appear in global once pgm exicution start
// % But x nad y are local var so it is hoisted and tz that's why once exicution start is find in local with undefined

// Global is not appered untill it use but Local will appear

var x = 5; //? Inferred as number (Local Dict)
var y = 7; //? inferred as number (Local Dict)

// % Javascript is the dynamic type beacuse it is define as


// null is type of javascript but null is type of object
// var c = null
//console.log(typeof null) //Object but why it is return Object it should be null because null datatype in null;

function add(a, b) {
    var c;
    c = a + b;

    return c;
}

var z = add(5, 7);
console.log(z);
console.log(typeof add); // function