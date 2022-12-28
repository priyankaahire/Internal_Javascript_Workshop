//* Calculator


function add(first, second)
{
 var result = first + second;
 return result;
}

function sub(first, second)
{
    var result = first - second;
    return result;
}

function mul(first, second)
{
  var result = first * second;
  return result;
}

function div(first, second)
{
   var result = first / second;
   return result;
}

var answer = add(5, 7);
console.log("answer if 5 + 7", answer);
var sub_answer = sub(10, 5);
console.log("answer if 10 - 5", sub_answer);
var mul_answer = mul(10, 5);
console.log("answer if 10 * 5", mul_answer);
var div_answer = div(10, 5);
console.log("answer if 10 / 5", div_answer);