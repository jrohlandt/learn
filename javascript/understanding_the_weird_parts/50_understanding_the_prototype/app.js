var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
};

var john = {
    firstname: 'John',
    lastname: 'Doe'
};

// don't EVER do this! for demo purposes only!!!
john.__proto__ = person;
console.log(john.getFullName());
