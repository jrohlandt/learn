window.onload = function () {

    var scrambleSubmitBtn = document.getElementById("scramble_form");
    scrambleSubmitBtn.addEventListener("submit", function (evt) { scrambleAndDisplayResult(evt); }, false);

    var alphMap = {
        'a': 'j',
        'b': 's',
        'c': 'e',
        'd': 'o',
        'e': 'w',
        'f': 'i',
        'g': 'r',
        'h': 'z',
        'i': 'k',
        'j': 't',
        'k': 'y',
        'l': 'h',
        'm': '%',
        'n': 'c',
        'o': 'b',
        'p': 'f',
        'q': 'v',
        'r': 'd',
        's': 'n',
        't': 'x',
        'u': 'q',
        'v': 'g',
        'w': 'u',
        'x': 'm',
        'y': 'l',
        'z': 'p',
        ' ': 'a'

    };


    var alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];


    var indexes = [];

    function isAlphMapUnique() {

        for (index in alphMap) {

            if (!alphMap.hasOwnProperty(index))
                continue;
            var element = alphMap[index];
            console.log(element);

            if (indexes.indexOf(element) !== -1)
                return element;

            indexes.push(element);
        }

        return true;
    }

    //console.log(isAlphMapUnique());
    //var string = "Hello world!";

    function encryptString(string) {
        var string = string.toLowerCase();
        //console.log(string);
        var splits = string.split('');
        var encString = '';
        //console.log(splits);

        splits.forEach( function (element, index, array) {
            if (typeof alphMap[element] === "undefined" ) {
                encString += element;
            } else {
                encString += alphMap[element];
            }
        });

        return encString;
    }

    function isInAlphMap(element) {
        for (var k in alphMap) {
            // don't iterate over properties inherited from prototype
            if (!alphMap.hasOwnProperty(k))
                continue;
            if (alphMap[k] === element) {
                return k;
            }
        }
        return false;
    }

    function decryptString(string) {
        var stringLwr = string.toLowerCase();
        var splits = stringLwr.split('');
        var decryptedString = '';
        var translated;

        splits.forEach(function (element, index, array) {
            if (translated = isInAlphMap(element)) {
                decryptedString += translated;
            } else {
                // append the value as is
                decryptedString += element;
            }
        });
        return decryptedString;
    }

    //var encryptedString = encryptString("this is a test");
    //console.log(encryptedString);
    //console.log(decryptString(encryptedString));

    function scrambleAndDisplayResult (evt) {
        console.log('entered scramble function');

        evt.preventDefault();
        var string = document.getElementById("user_text").value;

        console.log(string);
        var encryptedString = encryptString(string);
        console.log(encryptedString);

        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = encryptedString;
    }

    var copyBtn = document.getElementById("copy_to_clipboard");

    function copyToClipboard (evt) {
        var text = document.getElementById("result").textContent;

        console.log(text);
        copyText = text.createTextRange();
        copyText.execCommand("Copy");
    }

    copyBtn.addEventListener('click', function(evt){copyToClipboard(evt)});


};

