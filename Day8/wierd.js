//* Objects is dictionary {key:value} and [__proto__ (aka [[Prototype]]) references or pointer to parent]
const person = {
  id:1, 
  name:"Brendan"
};

//* Javascript make every key as string
const employee = {"id": 2, name:"Marc"}; //# name is a key is stringfield

//* Most language use 2 forms of delaing with dictionaries/ hashtable/map/hasmap
//? 1. .get/.put/.remove
//? Map m = new Map();
//? m.put("key", value);
//^ 2. Using [ ] to access keys from maps
//^ Map m = new Map();
//^ m["key"] = value;

//* Javascript also allows 2 forms
//? 1. dot operator
  const m = {};
  m.id = 1;
  console.log(m);

//? 2 [ ] operator
m["name"] = "Eich" //% Either [ ] operator
m.name = "Brendan" //% or . operator overriting the same thing
//m.401 = "plan"   //! ERROR 
m[401] = "plan"    //* This work This is an obejct
console.log(m);


//! Fake array using plain object and keys

const myArray = {};
myArray[0] = 11;
myArray[1] = 23;
myArray[2] = 36;
myArray.length = 3;

for (let index = 0; index<myArray.length; index++)
console.log(myArray[index]);


//% All keys are stringified by JS vy calling toString()

const obj = {};
obj[1] = 5;                           //% JS will make 1 -> 1.toString() -> "1"
obj[true] = 10;                       //% JS will make true -> true.toString() -> "true"
obj[person] = 5;                      //% JS Will make person -> person.toString() -> "[object Object]"
obj[employee] = 10;                   //% JS will make employee -> employee.toString() -> "[object Object]"
console.log(obj);
console.log(obj[person]); //* Out Put is 10 beacuse becuase obj[person] in dom as "[object Object]" and even obj[employee] also [object Object]
                          //* so in that it 5 is replace by 10 so that's why output is 10
console.log("Person ,",obj);


const manager = {
  id:1, 
  name:"Ani",
  toString() {return this.name}
};

const magObj = {};
magObj["name"] = "Radha";
magObj.name = "Ragha";
magObj[manager] = 5;  
console.log("Manager,",magObj);                    //% JS Will make person -> person.toString() -> "[object Object]"
magObj[employee] = 15;   
   
console.log("Manager,",magObj);





