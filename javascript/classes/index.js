"use strict";

class JustTesting {
    constructor(name, value) {
        this.name = name;
        this.value = value;

    }

    require() {
        return this.value ? false : `${this.name} is required`;
    }
}

var testing = new JustTesting('title', 'Test title');

console.log(testing['require']());
