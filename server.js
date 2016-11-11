//Dependencies
var express = require('express');
var bodyparser = require('bodyparser');
var override = require('method-override');

var app = express();

//Serve static content for the app from the public directory

//Database setup
var sequelize = require('sequilize'), connection;

if (process.env.JAWSDB_URL) {
	connection = new sequilize(process.env.JAWSDB_URL);
} else {
	connection = new sequilize('todo_db','root','password', {
		host: 'localhost',
		dialect: 'mysql',
		port: '3306'
	})
}

//create the model and define the schema using Sequilize
var todo = connection.define('todo',{
	description: {
		type: sequilize.STRING,
		field: 'description',
		allowNull: false
	}
});

