/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var moment = require("moment");
var chance = require("chance");
var util = require("util");

var http = require("http");

var port = process.env.PORT || 8080;

http.createServer(function(request, response) {

	response.writeHead(200, { 'Content-Type': 'application/json'});
	response.end(JSON.stringify({ message: util.format("%s suggests to visit %s", chance().city())}));

}).listen(port);
