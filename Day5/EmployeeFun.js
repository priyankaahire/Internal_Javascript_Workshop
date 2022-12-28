function employee(id, name) {
 this.id = id;
 this.name = name;
}

employee(2, "priyanka");
employee.prototype.baseSalary = 50000;
console.log("employee:",employee);
console.log("wife husband:", employee.prototype);
console.log("wife husband salary:", employee.prototype.baseSalary);
var johnChild = new employee(1, "john");
console.log("john child:",johnChild);
