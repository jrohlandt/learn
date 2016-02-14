window.onload = function () {
    var numberBlock = document.getElementById("number_block");

    var screen = document.getElementById("screen");

    var values = [0,1,2,3,4,5,6,7,8,9,"point","division","multiplication","subtraction","addition"];

    var buttons = {
        0: {value: 0, type: "number"},
        1: {value: 1, type: "number"},
        2: {value: 2, type: "number"},
        3: {value: 3, type: "number"},
        4: {value: 4, type: "number"},
        5: {value: 5, type: "number"},
        6: {value: 6, type: "number"},
        7: {value: 7, type: "number"},
        8: {value: 8, type: "number"},
        9: {value: 9, type: "number"},
        point: {value: ".", type: "number"},
        division: {value: "/", type: "operator"},
        multiplication: {value: "*", type: "operator"},
        subtraction: {value: "-", type: "operator"},
        addition: {value: "+", type: "operator"},
    };


    for (index in buttons) {
        (function () {
            var buttonObj = buttons[index];
            var buttonId = buttonObj.type+"_"+index;
            var button = document.getElementById(buttonId);

            button.addEventListener("click", function (event) {
                screen.value += buttons[button.value].value;
            });
        }());
    }
};
