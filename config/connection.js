var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Tabestan_20',
	database: 'burgers_db'
})

connection.connect(function(err){
	if(err) 
		throw err;
	console.log("connected as: "+connection.threadid);
});

module.exports = connection;