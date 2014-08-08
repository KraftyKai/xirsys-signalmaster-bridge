// index.js for signalmater-xirsys-bridge
var config = require('getconfig').
	querystring = require('querystring');
	https = require('https');
	
var options = {
	host: 'api.xirsys.com/getIceServers',
	port: '80',
	method: 'POST',
	headers: {'Content-Type': 'application/x-www-form-urlencoded'}
};

function safeCB(cb) {
	cb = (cb === 'function') ? cb : function(){};
}

exports.confirmRoom = function(name) {
	
};

//exports.getIceServers = function(name, cb) {
function getIceServers(name, cb) {
	options.path = '/getIceServers';
	var post_data = querystring.stringify({
		'ident' : config.ident,
		'secret' : config.secret,
		'domain' : config.domain,
		'application' : config.application,
		'room' : name,
		'secure': 1
	});
	
	options.headers.Content-Length = Buffer.byteLength(post_data);
	
	var req = https.request(options, function(res) {
		res.setEncoding('utf8');
		res.on('data', function (buff) {
			console.log('Response: ' + buff);
		});
	});
	
	post_req.write(post_data);
	post_req.end();
	
	safeCB(cb);
	cb;
	
};

// Quick tester function
getIceServers('default', function(name) {
	console.log("Continue...");
});