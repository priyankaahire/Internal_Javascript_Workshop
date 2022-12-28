id = 0;
name = '';
function Employee(id, name)
{
    this.id = id;
    this.name = name;
}

var emp1 = new Employee(1, "Priyanka");
var emp2 = new Employee(2, "Harsh");

console.log(emp1);
console.log(emp2);

function add(a, b) {
 return a + b;
}
var result = add(5, 7);
console.log(result);