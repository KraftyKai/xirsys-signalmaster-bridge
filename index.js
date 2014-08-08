// index.js for signalmater-xirsys-bridge
var config = require('getconfig'),
	querystring = require('querystring'),
	https = require('https');
	
var options = {
	hostname: 'api.xirsys.com',
	port: '443',
	method: 'POST',
	headers: {'Content-Type': 'application/x-www-form-urlencoded'}
};

function safeCB(cb) {
	if ( typeof(cb) === 'function' ) {
		return cb;
	} else {
		return function() {};
	}	
}

//exports.getIceServers = function(name, cb) {
exports.getIceServers(name, cb) {
	options.path = '/getIceServers';
	var post_data = querystring.stringify({
		'ident' : config.ident,
		'secret' : config.secret,
		'domain' : config.domain,
		'application' : config.application,
		'room' : 'legs',
		'secure': 1
	});
	
	options.headers['Content-Length'] = Buffer.byteLength(post_data);
	
	var req = https.request(options, function(res) {
		res.setEncoding('utf8');
		res.on('data', function (buff) {
			buff = JSON.parse(buff);
			safeCB(cb)(buff.d);
		});
	});
	
	req.write(post_data);
	req.end();
};

/*
// Quick tester function
getIceServers('default', function(ice_servers) {
	console.log("Response: " + JSON.stringify(ice_servers));
});*/
