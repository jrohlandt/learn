var english = {
    greetings: {
        basic: "Hello",
        morning: "Good morning"
    }
};

var spanish = {
    greetings: {
        basic: "Hola"
    }
};

function greet(greeting) {
    console.log(greeting + "!");
}

greet(spanish.greetings.basic);
