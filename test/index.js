// index.js for tests
var should = require('chai').should(),
	bridge = require('../index'),
	getIceServers = bridge.getIceServers;
	name = 'default';
	
console.log("WARNING: dev_config.json MUST CONTAIN VALID API KEY FOR TESTS TO PASS!");

describe('#getIceServers', function() {
	
	it('returns IceServer configuration values', function() {
		getIceServers(name, function(ice_servers) {
			ice_servers.should.have.property('iceServers');
		});
	});
	
});

