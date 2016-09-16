var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'burgersdb'
});


connection.connect(function(err){
    if(err){
        return console.log('error when connecting to db: ' + err)
    };

    console.log('connection id: ' + connection.threadId);
}) 


module.exports.connection = connection; 