
//% ...rest -> collect multiple arguments and make an arry
//# [...spred] -> take an array and break it up into individual values

//* Arrow function can use "rest" parameter but not "arguments"
const add = (...rest) => rest.reduce((total, element) => total + element);
console.log(add(1, 2, 3, 4, 5, 6));

//* Spread operator
function print(a, b, c) {
    console.log("a", a, "b", b, "c", c);
}

const array = [1, 2, 3];
print(...array) //* Spread the array as individual elements

const circle = {
    radius: 10
};


//% ...rest mean it self
function some(a, b, ...rest) {

    console.log("A", a, "b", b, "rest", rest) //* OUTPUT A 1 b 2 rest [ 3, 4, 5, 6 ] 
}

some(1, 2, 3, 4, 5, 6);

//! IT means REST u can not passed as first param either u have to passed as last other wise only one param as ...rest
// function some1(...rest, a, b) {

        //! ERROR: Rest parameter must be last formal 
        //% So used always 'use-strict'
//     console.log("A", a, "b", b, "rest", rest) //* OUTPUT A 1 b 2 rest [ 3, 4, 5, 6 ] 
// }

// some1(1, 2, 3, 4, 5, 6);



function named(a, b) {
    console.log(a, b);
}
named(a=5, b=6); //* OUTPUT 5 6

//! BEWARE.. there is named param

function wrong_way_named(a, b) {
   console.log(a, b);
}
wrong_way_named(b=5, a=4); 
//* In GLOBAL it is created a=4 and b=5 but
//* local a=5, b=4 so there is no named param in JAVASCRIPT


function defaultPram(orgName, team="AtomiQ", manager="Ani" ) {
  console.log(`orgName: ${orgName} team : ${team} manager: ${manager}`);
}
defaultPram("Amdocs NEW");         //> OUTPUT orgName: Amdocs NEW team : AtomiQ manager: Ani
defaultPram("Amdocs", "SRE");      //> OUTPUT orgName: Amdocs team : SRE manager: Ani 
defaultPram("Amdocs", "", "RAM");  //> OUTPUT orgName: Amdocs team :  manager: RAM