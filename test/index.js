// index.js for tests
var should = require('chai').should(),
	bridge = require('../index'),
	getIceServers = bridge.getIceServers,
	name = 'default',
	return_value;
	
function run_test() {
	describe('#return_value', function() {
		it('is a json object containing iceServers', function() {
			return_value.should.have.property('noodles');
		});
	});
}

getIceServers(name, function(ice_servers) {
	return_value = ice_servers;
	run_test;
});
	
console.log("WARNING: dev_config.json MUST CONTAIN VALID API KEY FOR TESTS TO PASS!");

