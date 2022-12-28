function person(id, name) {
 
    console.log("I am here", this);

}

person(1, "Eich");
person(2, "Mac");
var personChild = new person(1, "john");
console.log("john child:",personChild);
