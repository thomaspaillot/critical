'use strict';
var fs = require('fs');
var assert = require('assert');
var critical = require('./index');

it('Generate critical-path CSS', function (done) {
	critical.generate({
	  base: 'test/',
	  src: 'index.html',
	  dest: 'styles/critical.css',
	  width: 320,
	  height: 480
	}, function(output){
		var expected  = fs.readFile('test/styles/critical.css');
		assert(expected == String(output));
		done();
	});
});

it('Generate critical-path CSS without needing to write to disk', function (done) {
	critical.generate({
	  base: 'test/',
	  src: 'index.html',
	  width: 320,
	  height: 480
	}, function(output){
		var expected  = fs.readFile('test/styles/critical-pregenerated.css');
		assert(expected == String(output));
		done();
	});
});

it('Inline critical-path CSS', function (done) {
	critical.inline({
	  base: 'test/',
	  src: 'index-critical.html',
	  dest: 'index-final.html'
	}, function(output){
		var expected  = fs.readFile('test/index-test.html');
		assert(expected == String(output));
		done();
	});
});

it('Inline critical-path CSS without needing to write to disk', function (done) {
	critical.inline({
	  base: 'test/',
	  src: 'index-critical.html',
	}, function(output){
		var expected  = fs.readFile('test/index-test.html');
		assert(expected == String(output));
		done();
	});
});
