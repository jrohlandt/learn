// function constructors
function Person(firstname, lastname) {

    var firstname = firstname || 'John';
    var lastname = lastname || 'Doe';
    this.firstname = firstname;
    this.lastname = lastname;
    // if I define a method here each instance of this object will have it's own
    // copy of the method which will use a lot of memory.
    // Rather add the method to the prototype outside this function block.
    // this.getFullName = function() {
    //     return this.firstname + ' ' + this.lastname;
    // };

}
// add methods to prototype so that all instances of the Object can share the same copy
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
};

var person1 = new Person();
console.log(person1);
console.log(person1.firstname);
console.log(person1.getFullName());


var person2 = new Person('Jane', 'Brown');
console.log(person2);
