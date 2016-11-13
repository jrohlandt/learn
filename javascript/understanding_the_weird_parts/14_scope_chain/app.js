function a() {

    function b() {
        console.log(myVar);
    }

    var myVar = 2; // if this variable does not exist b() will find myVar in the global scope.
    b();
}

var myVar = 1;
a();
