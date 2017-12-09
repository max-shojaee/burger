var orm = require('../config/orm.js');

var burger = {
	all: function(res){
		orm.all('burgers', function(result) {
			res(result);
		})
	},

	update: function(id, res){
		orm.update('burgers', id, res);
	}
}

module.exports = burger;