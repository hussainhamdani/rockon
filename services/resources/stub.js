var fs = require('fs');
var dbpath = 'resources/db/';

function createRecord(configuration) {
    configuration = {
        'DATABASE': 'rockon',
        'TABLE': 'users',
        'RECORDS': [
            {
                name: 'Hussain',
                email: 'hussain@gmail.com'
            },
            {
                name: 'Abbas',
                email: 'abbas@gmail.com'
            },
            {
                name: 'Imran',
                email: 'imran@gmail.com'
            }
        ]
    };

    var tablePath = dbpath + configuration['DATABASE'];
    if (!fs.existsSync(tablePath)) {
        fs.mkdirSync(tablePath);
    }

    tablePath = tablePath + '/' + configuration['TABLE'];
    if (!fs.existsSync(tablePath)) {
        fs.mkdirSync(tablePath);
    }

    fs.readdir(tablePath, (err, files) => {
        var lastInsertedId = 0;
        if(err) {
            throw err;
        } else {
            lastInsertedId = parseInt(files.length);
            insertRecprds(tablePath, configuration['RECORDS'], lastInsertedId);
        }
    });
}

function insertRecprds(tablePath, records, lastInsertedId) {
    if(records.length > 0) {
        for(var key in  records) {
            lastInsertedId++;
            var record = records[key];
            record['id'] = lastInsertedId;
            var filePath = tablePath + '/' + lastInsertedId + '.txt';
            record = JSON.stringify(record);
            fs.appendFile(filePath, record, function (err) {
              if (err) throw err;
            });
        }
    }
}

module.exports = function (app) {

    // students
    app.get('/api/students', function (req, res) {
        createRecord({});
        var filePath = dbpath + 'students/';
        /*for(var x = 1; x <= 1000; x++) {
            var user = {
                name: 'User ' + x,
                type: 'student'
            };
            var fileName = filePath + 'user-' + x + '.txt';
            /*user = JSON.stringify(user);
            fs.appendFile(fileName, user, function (err) {
              if (err) throw err;
              console.log('Updated user ' + x);
            });*
            //Delete the file mynewfile2.txt:
            fs.unlink(fileName, function (err) {
              if (err) throw err;
              console.log('Deleted user ' + x);
            });
        }*/
        fs.readFile(dbpath + 'students.txt', function(err, data) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(data);
            res.end();
        });
    });
};
