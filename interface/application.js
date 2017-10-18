var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	var filePathPrefex = './resources';
	var filePath = filePathPrefex + '/html/index.html';
	var fileContentType = 'text/html';
	if(q.pathname.indexOf('scripts/') > -1){
		filePath = filePathPrefex + q.pathname;
		fileContentType = 'application/javascript';
	}

	fs.readFile(filePath, function(err, data) {
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Not Found");
		} else {
			console.log('Content From : ' + filePath);
		}
		res.writeHead(200, {'Content-Type': fileContentType});
		res.write(data);
		return res.end();
	});
}).listen(8080);