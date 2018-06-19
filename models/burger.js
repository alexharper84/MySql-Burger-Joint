const orm = require('../config/orm.js');

var burger = {
	selectAll: function(callback){
		orm.selectAll('burgers', function(res){
			callback(res);
		});
	},
	insertOne: function(column, name, callback){
		orm.insertOne('burgers', column, name, function(res){
			callback(res);
		});
	},
	updateOne: function(table, column, id, callback){
		orm.updateOne('burgers', column, id, function(res){
			callback(res);
		});
	},
	deleteOne: function(table, id, callback){
		orm.deleteOne('burgers', id, function(res){
			callback(res);
		});
	}
};

module.exports = burger;
