// polyfill for Object.create
if (!Object.create) {
    Object.create = function(o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation only accepts one argument/object.');
        }
        function F() {}
        F.prototype = o;
        return new F();
    }
}

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
