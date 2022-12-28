function outer() {

    console.log("outer arguments", arguments);
    console.log(`outer ${this}`);


    const add =() => {
        console.log("arguments", arguments);   //! Borrowed from outer  
        console.log(`${this}`);                //! Borrowed from outer
    }

    add(1, 2, 3);
}

outer(5, 7, 1);