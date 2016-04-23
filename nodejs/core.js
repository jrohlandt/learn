var path = require('path');
var util = require('util');
var v8 = require('v8');

util.log(path.basename(__filename));
util.log(v8.getHeapStatistics());