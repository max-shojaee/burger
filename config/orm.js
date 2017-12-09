var connection = require('./connection.js');

var orm = {
	all: function(table, resp){
		connection.query('SELECT * FROM '+table+';', function(err, result){
			if (err)
				throw err;
			resp(result);
		})
	},
	
	update: function(table, itemId, resp){
		/*
		connection.query('UPDATE '+table+ 'SET devoured=true WHERE id='+itemId+';', 
			function(err, result){
				if (err)
					throw err;
				resp(result);
		})
		*/
	}
}

module.exports = orm;