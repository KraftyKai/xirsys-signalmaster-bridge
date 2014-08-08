// index.js for tests
var should = require('chai').should(),
	getIceServers = require('../index'),
	name = 'default';
	
describe('#getIceServers(' + name + ')', function() {
	it('should pass a json object', function(done) {
		getIceServers(name, function(ice_servers) {
			should.exist(ice_servers);
			done();
		});
	});
	
	it('should contain iceServers', function(done) {
		getIceServers(name, function(ice_servers) {
			should.have.property('iceServers');
			console.log("Response received from Xirsys: \n" + JSON.stringify(ice_servers));
			done();
		});
	});
});
	
console.log("WARNING: dev_config.json MUST CONTAIN VALID API KEY FOR TESTS TO PASS!");

