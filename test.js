'use strict';
var test = require('ava');
var x = require('./');

test(function (t) {
	t.assert(x[200] === 'OK');
	t.assert(x[500] === 'Internal Server Error');
	t.end();
});
