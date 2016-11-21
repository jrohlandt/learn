// By Value (primitives)

var a = 3;
var b;

b = a;
a = 2;

console.log(a, b);

// By Reference (all objects including functions)
var c = { greeting: 'hi'};
var d;

d = c;
d.greeting = 'hello';
console.log(c, d);

// By Reference even as function parameters
function changeGreeting(obj) {
  obj.greeting = 'Hola';
}

changeGreeting(d);
console.log(c, d);

// but passing a new object to a existing reference will create a new memory locatioin
// e.g.
c = { greeting: 'howdy'};
console.log(c, d);
