window.onload = function () {
    var box = document.getElementById("box");
    box.addEventListener('click', function () {
        var classList = box.classList;

        if (classList.contains("move") === false) {
            box.classList.add("move");
        } else {
            box.classList.remove("move");
        }

        console.log(box.classList.contains("move"));
    });
};