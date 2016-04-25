var fs = require("fs");


if (fs.existsSync("test")) {
    console.log("Directory already exists.");
} else {
    fs.mkdir("test", function(err) {
       if (err) {
           console.log(err);
       } else {
           console.log("Directory Created");
       }
    });
}