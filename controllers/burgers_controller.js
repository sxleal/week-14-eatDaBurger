//This file creates all the functions that handle the routing for the app, and the logic for each route taken

var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

//Get route -->Index/home
router.get('/',function(req,res){
	res.redirect('/burgers');
});

router.get('/burgers',function(req,res){
	burger.all(function(burger_data){
		res.render('index',{burger_data});
	});
});

router.post('/burgers/create',function(req,res){
	burger.create(req.body.burger_name,function(result){
		console.log(result);
		res.redirect('/');
	});
});

router.put('/burgers/update',function(req,res){

	burger.update(req.body.burger_ID,function(result){
		console.log(result);
		res.redirect('/');
	});
});

module.exports = router;