//* function defination (declaration)

function declaration() {
}

//# Function expression

var fun = function() {

}

// ! This is a global function expression

gfn = function() {
    console.log("I am log");
}

gfn();

var vfn = function() {
    console.log("I am vfn");

}
vfn();

function lfn() {
    console.log("I am lfn")
}

lfn();

// function as object
var person = {
    id:1,
    name:"Priyanka",
    print: function() {
        console.log("I am person");
    }
}
// % This will be create in own object dictionary inside the person object print is create inside the person object not at local 

person.print();