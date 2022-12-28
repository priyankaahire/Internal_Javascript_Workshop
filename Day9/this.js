class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
 // this ia method
    print() {
        console.log("I am here", this);
    //     var data1 = function() {
    //     console.log("I inside method", this);
    //    }
    //    data1();
    }
}

const eich = new Person(1, "Eich");
eich.print();
const mac = new Person(2, "Mac");
mac.print();