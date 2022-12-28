'use strict';

function addFn(a, b) {
    return a + b;
}

//* Write arrow function for compute function

const add = (a, b) => a + b;

//! STOP writting constructor function
function PersonFun(id, name) {
    this.id = id;
    this.name = name;
}

PersonFun.prototype.print = function() {
    console.log(this.id, this.name);

}
//const per = PersonFun(1, "Priyanka"); //! ERROR becuse of use-strict
const newper = new PersonFun(1, "Priyanka");
newper.print();


//* Write classes insted of constructor function
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    print() {
        console.log(this.id, this.name);
    }
}

const marc = new Person(1, "Marc");
marc.print();