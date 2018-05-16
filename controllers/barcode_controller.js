//NPM Dependencies
var express = require("express");
// var jwt = require("jsonwebtoken");

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

	app.get('/item', (req, res) => {
		res.render("item");
	});

	app.get('/index', (req, res) => {
		console.log(req.params);
		res.render("index");
	});

	//get all catalog info items that have a matching upc
	app.get('/api/upc/:upc', (req, res) => {
		db.cataloginfo.findOne({
			where: {
				upc: req.params.upc
			}
		}).then(function (results) {
			// res.json(results);
			res.render("itemform", { itemDetails: results });
		});
	});

	//get all catalog info items that have a matching model
	app.get('/api/model/:model', (req, res) => {
		db.cataloginfo.findAll({
			where: {
				model: req.params.model
			}
		}).then(function (results) {
			//res.json(results);
			res.render("itemform", { itemDetails: results });
		});
	});

	app.post('/api/create/:catalogExists/:data', (req, res) => {

	});



}
