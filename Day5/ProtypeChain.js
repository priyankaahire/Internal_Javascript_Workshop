function Employee(id, name) {
    this.id = id;
    this.name = name;

    // ! Bad coz it is always create into the child
    this.printDetails = function() {
        console.log(`id:${this.id} name:${this.name}`)
    }
    // ! every object keep the copy each own object 

    // # this is create the single 
    Employee.prototype.print_details = function() {
        console.log(`id:${this.id} name:${this.name}`);
    }
}

Employee.count = 1;
Employee.prototype.baseSalary = 50000;
var eich = new Employee(1, "Priyanla");
var marc = new Employee(2, "jeshal");
console.log("Employee prototype", Employee.count);
console.log("Employee prototype", Employee.prototype);
console.log("eich", eich);

eich.print_details();
eich.printDetails();

marc.print_details();
marc.printDetails(); 

//# print_details: marc and eich only create in prototype (under the women -> husband i. in protype ) and only once that is the good practice
//# printDetails : craete everytime n march n eich is created // every child create the copy of same obejct which is not good practice

console.log(eich.x); // jonh (child dont have so he is asking to dad)-> parent (if ) -> object (father of dad) -> null (becoz dont find and now he look into the heap heap send undefined) -> undefined
console.log(eich.hasOwnProperty("x"));
console.log(eich.hasOwnProperty("id"));