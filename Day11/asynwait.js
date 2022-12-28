
function longRun(ms) {
    const start = new Date;
    while(new Date() - start < ms);
    return 42;
}
function exceutor(resolve, reject) {
    console.log("Start");
    resolve(longRun(3000));
    console.log("end");
}
async function process() {
console.log("In process");
let pakka = new Promise(exceutor);
pakka.then(result =>console.log("Process", result));
console.log("Pakka");
let pakka2 = new Promise(exceutor);
pakka2.then(result =>console.log("Process2", result));
console.log("Pakka2");

//const result = await longRun(0);
//console.log("Next statement", result);
console.log("Program ends")
}

process();