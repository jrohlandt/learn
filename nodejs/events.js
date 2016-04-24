//var events = require('events');
//
//var emitter = new events.EventEmitter();
//
//emitter.on('myEvent', function(message, status) {
//   console.log(`${status}: ${message}`);
//});
//
//emitter.emit('myEvent', "Hello World", 200);

var Person = require("./lib/Person");

var jeandre = new Person("Jeandre Rohlandt");

jeandre.on('speak', function(said) {
   console.log(`${this.name}: ${said}`);
});


jeandre.emit('speak', 'if it is worth doing, it should be done right');