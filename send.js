var http = require('http');
var get = require('main.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end(response());
}).listen(8080);

function get( news, weight, locale[]) {
	var resJson = JSON.parse(news);
	resJson.push(weight);
	resJson.push(locale);
	return resJson;
}
