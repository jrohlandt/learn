window.onload = function () {
    var screen = document.getElementById("screen");
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

        if (!buttons.hasOwnProperty(index)) {
            continue;
        }

        (function () {
            var buttonObj = buttons[index];
            var buttonId = buttonObj.type+"_"+index;
            var button = document.getElementById(buttonId);

            button.addEventListener("click", function (event) {
                screen.value += buttons[button.value].value;
            });
        }());
    }

    var calculations = {
        division: {
            symbol: "/",
            func: function (int1, int2) {
                return int1 / int2;
            }
        },
        multiplication: {
            symbol: "*",
            func: function (int1, int2) {
                return int1 * int2;
            }
        },
        subtraction: {
            symbol: "-",
            func: function (int1, int2) {
                return int1 - int2;
            }
        },
        addition: {
            symbol: "+",
            func: function (int1, int2) {
                return int1 + int2;
            }
        },

    };

    function calculate (int1, int2, operator) {
        console.log(int1, int2, operator);

        for (index in calculations) {
            if (!calculations.hasOwnProperty(index)) {
                continue;
            }

            if (calculations[index].symbol === operator) {
                return calculations[index].func(int1, int2);
            }
        }
        return false;
    }

    document.getElementById("operator_equals").addEventListener("click", function (event) {
        event.preventDefault();

        // 9*2/4+6-3
        var sum = screen.value;
        console.log(sum);

        var characters = sum.split("");
        console.log(characters);

        var numbers = [];
        var operators = [];
        for (var i = 0; i < characters.length; i++) {
            var char = characters[i];
            //if (isNaN(parseInt(char))) {
            //    operators.push(char);
            //} else {
            //    // todo handle multi char numbers
            //    numbers.push(parseInt(char));
            //}
            var number = "";
            while (!isNaN(parseInt(characters[i])) || (characters[i] === ".")) {
                number += characters[i];
                i++;
            }

            if (!isNaN(parseInt(number))) {
                numbers.push(parseInt(number));
            }

            if (i >= characters.length) {
                continue;
            }

            if (isNaN(parseInt(characters[i]))) {
                operators.push(characters[i]);
            }
        }

        var answer = 0;
        for (var i = 0; i < numbers.length; i = i+2) {
            //console.log(i);
            var oi = operatorIterator = (i < 2) ? i : (i - 1);
            var int1 = (i === 0) ? numbers[i] : answer;
            var int2 = (i === numbers.length - 1) ? numbers[i] : numbers[i+1];
            answer = calculate(int1, int2, operators[oi]);
        }

        console.log(numbers, operators, answer);

    });
};
