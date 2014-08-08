// index.js for tests
var should = require('chai').should(),
	bridge = require('../index'),
	getIceServers = bridge.getIceServers,
	return_value;
	name = 'default',
	
describe('#getIceServers(' + name + ')', function() {
	it('should pass a json object of iceservers to the callback', function(done) {
		getIceServers(name, function (ice_servers) {
			//console.log(JSON.stringify(ice_servers));
			should.exit(ice_servers);
			
		});
	});
});
	
console.log("WARNING: dev_config.json MUST CONTAIN VALID API KEY FOR TESTS TO PASS!");

