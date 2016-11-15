function greet(name) {
    // if no name is passed in when function is called, name will be equal to undefined
    name = name || '<Your name here>';
    console.log("Hello " + name);
}

greet();
greet('Tony The Tiger');
