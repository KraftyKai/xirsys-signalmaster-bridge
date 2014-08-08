// index.js for tests
var should = require('chai').should(),
	bridge = require('../index'),
	getIceServers,
	confirmRoom,
	name = 'default';
	
console.log("WARNING: dev_config.json MUST CONTAIN VALID API KEY FOR TESTS TO PASS!");

describe('#getIceServers', function() {
	
	it('returns IceServer configuration values', function() {
		getIceServers(name).should.have.property('iceServers');
		getIceServers(name).should.have.property('url');
		getIceServers(name).should.have.property('username');
	});
	
});

