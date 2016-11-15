console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean("")); // false

var a;

// anything passed into "if" will be coerced to a boolean
if (a) {
    console.log('a has the value: ', a);
} else {
    console.log('a has no value.');
}

if (a || a === 0) {
    console.log('a has the value: ', a);
} else {
    console.log('a has no value.');
}
