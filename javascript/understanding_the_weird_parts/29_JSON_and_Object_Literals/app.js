var objectLiteral = {
    firstname: 'Mary',
    isProgrammer: true
};
// Convert a JavaScript Object to a JSON string
var toJson = JSON.stringify(objectLiteral);
console.log(toJson);

// Convert a JSON string to a JavaScript Object
var jsonString = '{ "firstname": "Mary", "isProgrammer": true }';
var toObject = JSON.parse(jsonString);
console.log(toObject);
