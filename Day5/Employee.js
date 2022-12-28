function Employee(id, name) {
    this.id = id;
    this.name = name;
}

Employee.count = 1;
Employee.prototype.baseSalary = 50000;
var jonhChild = new Employee(1, "Priyanla");
console.log("Employee prototype", Employee.count);
console.log("Employee prototype", Employee.prototype);
console.log("jonhChild", jonhChild);
