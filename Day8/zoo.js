//* Closure is dictionary attched to inner function object in [[Scopr]]
//* chain, where it keeps additional references to variables in the outer
//* lexical scope which has accessed
//*

//% Closure varibales will survive even if outer lexical scope is gone
//%


const elephant = "haathi mere saathi";
function zoo() {

    const tiger ="Zinda hai";
    const lion = "Zaroor marega";

    function cage() {
        console.log("Tiger : ", tiger);
        console.log("elephant:", elephant);
    }
    cage()            //^  clouser will create when a function touchch any variable outside here I am not return anything but still clouser will create
                        //^ closuer is not function
                        //^ After calling cage() clouser is immediately distroy 

   // return cage         //% here clouser not distroy immediately becaused it will called by zoo()
                        //% return this functions reference
    //! At this point all local var are destroyed => tiger, lion
}

const pinjara = zoo();
//pinjara();  //* Still prints tiger zinda hai