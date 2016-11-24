var a = 3;
console.log(typeof a); // number

var a2 = new Number(3);
console.log(typeof a2); // object

var b = "Hello";
console.log(typeof b); // string

var c = {};
console.log(typeof c); // object

var d = [];
console.log(typeof d); // object
console.log(Object.prototype.toString.call(d)); // [object Array]

function Person(name) {
    this.name = name;
}
var e = new Person('Jane');
console.log(typeof e); // object
console.log(e instanceof Person); // true

var Dude = {
    name: 'John Doe'
};
var du = Object.create(Dude);
console.log(typeof du); // object
// console.log(du instanceof Dude); // app.js:30 Uncaught TypeError: Right-hand side of 'instanceof' is not callable(…)

console.log(typeof undefined); // undefined
console.log(typeof null); // object (it's a bug)

function f() {
    return 'testing';
}
console.log(typeof f); // function

var g = function() {
    return 'still testing';
}
console.log(typeof g); // function
