var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
};

var person1 = Object.create(person);
person1.firstname = 'John';
console.log(person1.greet());
