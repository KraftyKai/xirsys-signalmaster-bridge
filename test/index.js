// index.js for tests
var should = require('chai').should(),
	bridge = require('../index'),
	getIceServers,
	confirmRoom,
	name = 'default';
	
console.log("WARNING: dev_config.json MUST CONTAIN VALID API KEY FOR TESTS TO PASS!");
	
describe('#confirmRoom', function() {

	it('returns true once the room exists')
		confirmRoom(name).should.equal(true);
	});

});

describe('#getIceServers', function() {
	
	it('returns IceServer configuration values', function() {
		getIceServers(name).should.have.property('iceServers');
	});
	
});

