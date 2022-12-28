'using-strict'

function nation()  {
   
   flag = 10;
   console.log("hoisted var", flag);
   var flag = 20;
   console.log("Declared flag", flag);

   if(flag == 10) {
    var flowers = 5;
   }
   console.log("Flowers", flowers); // undefined;

   if(flag == 20) {
    var flowers = 5;
   }
   console.log("Flowers", flowers); // 5;
   
}
//nation();

function letNation() {
    let flag = 20;
    flag = 10;
    console.log("flag value", flag);

    if(flag == 10) {
       
        let flowers1 = 10;
        var flowers = 5; // here flowers is in local scope becuse it is hoisted
    }
    console.log("Flowers", flowers);
    //console.log("Flowers1", flowers1); //ReferenceError: flowers1 is not defined

}

letNation();