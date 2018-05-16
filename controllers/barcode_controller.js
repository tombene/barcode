//NPM Dependencies
var express = require("express");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

//Local Dependencies
var db = require("../models");

module.exports = function (app) {

	app.get('/', (req, res) => {
		res.render("login");
	});

	app.post('/index', (req, res) => {
		// find the user
		db.securityuser.findOne({
			where: {
				userName: req.body.userName,
				password: req.body.password
			}
		}).then(function (user) {
			res.render("index", { user });
		});
	});

	app.get('/logout', function (req, res) {
		users = [];
		res.redirect('/login');
	});

	app.get('/newUser', (req, res) => {
		res.render("newUser");
	});

	app.post('/register', function(req, res) {
  
		var hashedPassword = bcrypt.hashSync(req.body.password, 8);
		
		db.securityuser.create({
			userName: req.body.userName,
			email: req.body.email,
			password: hashedPassword,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			address: req.body.address,
			address2: req.body.address2,
			city: req.body.city,
			state: req.body.state,
			zip: req.body.zip
		},
		function (err, user) {
			if (err) return res.status(500).send("There was a problem registering the user.")
			// create a token
			var token = jwt.sign({ id: user._id }, config.secret, {
				expiresIn: 86400 // expires in 24 hours
			});
			res.status(200).send({ auth: true, token: token });
		}); 
	});

	app.get('/item', (req, res) => {
		res.render("item");
	});
<<<<<<< HEAD


=======
	
	app.get('/categories', (req, res) => {
			res.render("categories");
	});
	
>>>>>>> 10c66c1feaf5fdfa0abc14cbcab49719dc404525

	app.get('/index', (req, res) => {
		console.log(req.params);
		res.render("index");
	});

	//get all catalog info items that have a matching upc
	app.get('/api/upc/:upc', function (req, res) {
		db.cataloginfo.findOne({
			where: {
				upc: req.params.upc
			}
		}).then(function (results) {

			res.json(results);

		});
	});

	//get all catalog info items that have a matching model
	app.get('/api/model/:model', (req, res) => {
		db.cataloginfo.findAll({
			where: {
				model: req.params.model
			}
		}).then(function (results) {
			res.json(results);
		});
	});

	//get all catalog info items that have a matching title
	app.get('/api/title/:title', (req, res) => {
		db.cataloginfo.findAll({
			where: {
				title: req.params.title
			}
		}).then(function (results) {
			res.json(results);
		});
	});
	
	//get all catalog categories data
	app.get('/api/categories/', (req, res) => {
		db.cataloginfocategory.findAll({
		}).then(function (results) {
			res.json(results);
		});
	});
	
	//get all catalog categories data
	app.get('/api/allitems/', (req, res) => {
		db.cataloginfo.findAll({
		}).then(function (results) {
			res.json(results);
		});
	});

	app.post('/api/create/:catalogExists/:data', (req, res) => {

	});



}
