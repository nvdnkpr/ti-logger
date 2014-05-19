var logger = require('..'),
	should = require('should');

describe('ti-logger.js', function() {

	it('should exist', function() {
		should.exist(logger);
		logger.should.be.a.Function;
	});

});