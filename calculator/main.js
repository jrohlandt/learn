window.onload = function () {

    var screenSum = document.getElementById("screen_sum");
    //console.log(screenSum.children[0]);
    var screenAnswer = document.getElementById("screen_answer");
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


    function addEventListenersForButtons() {

        var index;
        for (index in buttons) {
            if (!buttons.hasOwnProperty(index)) { continue; }

            (function () {
                var buttonObj = buttons[index];
                var buttonId = buttonObj.type+"_"+index;
                var button = document.getElementById(buttonId);

                button.addEventListener("click", function (event) {
                    screenSum.dataset.sum += buttons[button.value].value;
                    screenSum.children[0].innerHTML += buttons[button.value].value;
                    screenAnswer.children[0].innerHTML = buttons[button.value].value;
                });
            }());
        }

        var equalsButton = document.getElementById("action_equals");
        equalsButton.addEventListener("click", function (event) {
            event.preventDefault();
            calculateAnswer();
        });
    }

    function calculate (int1, int2, operator) {
        console.log("calculate: ", int1, int2, operator);

        var index;
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

    function getNumbersAndOperators (sum) {

        // e.g. 9*2/4+6-3
        console.log("getNumbersAndOperators: ", sum);

        var characters = sum.split("");
        console.log("characters: ", characters);

        var numbers = [];
        var operators = [];
        for (var i = 0; i < characters.length; i++) {
            var number = "";
            while (!isNaN(parseInt(characters[i], 10)) || (characters[i] === ".")) {
                number += characters[i];
                i++;
            }

            // get numbers
            if (!isNaN(parseInt(number), 10)) {

                number = (number % 1 === 0) ? parseInt(number, 10) : parseFloat(number);
                numbers.push(number);
            }

            if (i >= characters.length) {
                continue;
            }

            // get operators
            if (isNaN(parseInt(characters[i]), 10)) {
                operators.push(characters[i]);
            }
        }

        return {numbers: numbers, operators: operators};
    }

    function calculateAnswer () {

        var sum = screenSum.dataset.sum;

        var arr = getNumbersAndOperators(sum);
        var numbers = arr.numbers;
        var operators = arr.operators;

        var answer = 0;
        //for (var i = 0; i < numbers.length;(i === 0) ? i+2 : i++) {

        var i = 0;
        var index;
        for (index in numbers) {
            // operator increment
            var oi = (i === 0) ? i : (i - 1);

            console.log("i: ", i);
            console.log("oi: ", oi);

            // int1: first loop it is first number, from 2nd loop on it is answer
            var int1 = (i === 0) ? numbers[i] : answer;

            // int2: if i is equal to last array index, use as is. Else add 1.
            var int2 = (i === 0) ? numbers[i+1] : numbers[i];

            if (i >= numbers.length) { break; }

            answer = calculate(int1, int2, operators[oi]);

            i = (i === 0) ? i+2 : i+1;
        }

        screenAnswer.children[0].innerHTML = answer;
        console.log("numbers: ", numbers, "operators: ", operators, "answer: "+answer);
    }

    addEventListenersForButtons();

};
