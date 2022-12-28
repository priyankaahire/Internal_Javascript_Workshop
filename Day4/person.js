// * Object is alos dictionary (coz id is key , 1 is the value)
//obj = { } //
var person = {
    id:1, // !Field or member varibale
    name: "Bredan EICH", // ! Field 

    print: function() {
        console.log("I am person");
        console.log(this.id, this.name);
    }
}
person;
person.print();
//console.log(person.toString());
