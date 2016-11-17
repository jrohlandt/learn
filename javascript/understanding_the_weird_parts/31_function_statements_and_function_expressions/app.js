// a Expression is a unit of code that results in a value.
// e.g.
1 + 2;
a = 'I am ' + ' a expression!';


// a Statement just does work but does not return a value
// e.g. the "if" statement
if (a === 'I am a expression!') {
    // run expressions
}

// function Statement
function greet() {
    // run expressions
}

// calling eGreet here will result in Fatal error "undefined is not a function"
//(no hoisting) remember it is a variable
eGreet();

// function expression
var eGreet = function () {
    //
}

eGreet(); // no problems
