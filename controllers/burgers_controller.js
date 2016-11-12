//This file creates all the functions that handle the routing for the app, and the logic for each route taken

var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

router.get('/',function(req,res){
	res.redirect('/burger');
});

router.get('/burger',function(req,res){
	burger.all(function(data){
		var hbsObject= {burgers: data};
		console.log(hbsObject);
		res.render('index',hbsObject);
	});
});

router.post('/burger/create',function(req,res){
	burger.create(['burger_name'],[req.body.name],function(){
		res.redirect('/burger');
	});
});

router.put('/burger/update/:id',function(req,res){
	var condition = 'ID = '+req.params.ID;
	console.log('condition',condition);

	burger.update({'devoured': req.body.devoured},condition,function(data){
		res.redirect('/burger');
	});
});

module.exports = router;