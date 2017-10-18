var fs = require('fs');
var dbpath = 'resources/db/';

function getAllRecords() {
	
}
module.exports = function (app) {

	// students
	app.get('/api/students', function (req, res) {
		fs.readFile(dbpath + 'students.txt', function(err, data) {
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.write(data);
			res.end();
		});
	});
};
