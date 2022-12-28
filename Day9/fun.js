'use strict'

// gfn = function() {
//     console.log(`gfn ${this}`); //* gfn [object global] I am pointing to the class
//     this.Array = "My Name"; //! This will creare the TypeEroor in lfn();
                               //! Where will name go ??
// }
// gfn();   

function lfn() {
    
    console.log(`lfn ${this}`); //* lfn [object global] I am pointing to the class
    console.log(Array.isArray([])); //! Array.isArray is not a 
                                    //! function Here I will recive dthe error coz in above function 
                                    //! we replace the Global arrays by "MY name" string and here we checked of is Array so 
                                    //! To Avoid such situction 
                                    //% 'use strict'
}
lfn();

class Person {
    id= 1;
    name ="Breden";

    //* Method
    print() {
        console.log(`Person ${this}`) //* This pointing to the Person object
    }
}
const eich = new Person();
eich.print();

