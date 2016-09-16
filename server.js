var connection = require('./config/connection.js').connection;
var expressHndlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var express = require('express');
var mysql = require('mysql');

var app = express();
var routes = require('./controllers/burgers_controllers.js');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended:false}));

app.engine('handlebars', expressHndlebars({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use('/', routes);

var port = 3000;

app.listen(port, function(){
    console.log('Listening on PORT ' + port);
}); 