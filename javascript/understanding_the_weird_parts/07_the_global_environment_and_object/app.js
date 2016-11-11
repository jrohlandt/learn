// Global: Anything that is not inside a function.
// Global Object in browsers is window which at a global level is equal to 'this' (window === this)
console.log(window);
console.log(this);


var a = 'Hello World!';

function b() {

}

// if you now inspect the window object you will see a and b in it.
