function excecutor(resolve, reject) {
  console.log("I am excecutor");
  //% Here console is printed but not rejected becuase reject is not console it
  //% have to go into the catch coz reject is called function it side
  //% 1.now print console
  //% 2. rejected might be exicuted very quicly but still will not display becuase there is rule it 
  //% will exicuted after other task like pakka, last statement, finally going, n then primise (coz now stack is empty)
  reject("I am so sorry, could not keep the promise");
  console.log("I am excecutor ****");
  delay(5000);
   //resolve("we kept the promise");
}
function delay(ms) {
  const start = new Date;
  while (new Date() - start < ms);
}
const pakka =  new Promise(excecutor);
//# 1st Print
console.log(`promise was made ${pakka}`);
pakka
    .then(result => console.log(result))   //* Promise was resolved (kept);
    //# 3 Print
    .catch(broken => console.log(broken));   //* Promise was rejected (broken);
//# 2.nd print
console.log("Last staement");
delay(5000);
console.log("Finally Going");