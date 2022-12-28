function sqr(x) {
    return x * x;
}


   
          function sqr(x) {  return x * x };   //! Function DECLARATION
var sqr = function(x)    { return   x * x }    //* Function Expression
var sqr = (x)       =>   { return   x * x }    //# Arrow Function
var sqr = (x)       =>              x * x ;    //^ single return remove { return }
var sqr =  x        =>              x * x ;    //? single param? remove ()


var sqr = x => x * x; // # Arrow function (Fat Arrow =>) or Lambda
var result = sqr(5);
//var result = new sqr(5); //! sqr is not a constructor
// ! new sqr(5) //CANNOT use new on arrow function
console.log(result);

