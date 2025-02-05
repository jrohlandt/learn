var fs = require("fs");
var path = require("path");

fs.readdir("text_files", function(err, files) {
    files.forEach(function(fileName) {
        var file = path.join(__dirname, "text_files", fileName);
        var stats = fs.statSync(file);

        if (stats.isFile()) {
            fs.readFile(file, "UTF-8", function(err, contents) {
                console.log(contents);
            });
        }
    });
});

