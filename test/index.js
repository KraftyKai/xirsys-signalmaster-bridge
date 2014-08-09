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
			ice_servers.should.have.property('iceServers');
			console.log("Response received from Xirsys: \n" + JSON.stringify(ice_servers));
			done();
		});
	});
});
	
console.log("WARNING: dev_config.json MUST CONTAIN VALID API KEY FOR TESTS TO PASS!");
console.log("You will also need to move your dev_config.json to /node-modules/mocha/bin/");
console.log("in order for 'npm test' or 'make test' to work.\n");
console.log("I'm sure there's a way to fix this, but I don't know it.  Feel free to contact me");
console.log("if you do! (KraftyKai@gmail.com)");

