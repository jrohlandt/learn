var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var logName = function(lang1, lang2) {
    console.log(this.getFullName(), lang1, lang2);
};

// Bind just creates a copy of the function
var logPersonName = logName.bind(person);
logPersonName('afr', 'en');

// Call actually executes the function
logName.call(person, 'en', 'es');

// Apply works the same as Call, execept it only accepts a array of parameters
logName.apply(person, ['en', 'fr']);

(function(lang1, lang2) {
    console.log(this.getFullName(), lang1, lang2);
}).call(person, 'es', 'en');

// Usage examples
// -------------------

// Function Borrowing

var person2 = {
    firstname: 'Jane',
    lastname: 'Doe',
};
console.log(person.getFullName.call(person2));

// Function Currying

function greet(greeting, being) {
    console.log(greeting + ' ' + being + '!');
}

var greetWorld = greet.bind(this, 'Hello');
greetWorld('World'); // Hello World!
