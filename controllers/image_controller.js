//NPM Dependencies
var express = require("express");


//Local Dependencies
var db = require("../models");

module.exports = function (app) {

	app.post('/api/item', (req, res) => {
		var code = 500;
		var message = 'Internal Server Error';
		var response = '';
		var catalogData = {
			barcode: req.body.upc,
			model: req.body.model,
			title: req.body.title,
			// category: req.body.category,
			description: req.body.description
			// imageUpload: req.body.imageUpload
		};
		console.log("test 3");
		db.cataloginfo.create(catalogData)
			.then(function (model) {
				code = 200;
				message = 'OK';
				response = 'Record is successfully added.';
				console.log("test 4");
				res.json({
					code: code,
					message: message,
					response: {
						msg: response
					}
				});
			})
			.catch(function (err) {
				code = 500;
				response = 'Failure to add';
				console.log("test 5");
				res.json({
					code: code,
					message: message,
					response: {
						msg: response
					}
				});
			});
	})
}