# barcode

## Main Functionality: 
Quickly input product into inventory and make it available to consumers. Keep track of who inputted and edited the product for productivity and accountability reasons. Keep track of where the product came from to help answere questions like: which vendors are profitable, should renegotiations be persued, or should business be discontinued with the vendor. Track costs back to every item to help with profitability.


## Internal Processing Side
- [ ] search box to find existing products if any and display those.
- [ ] look up product on walmart and amazon to verify pricing or to find information.
- [ ] make each section of information clickable and mapped to our fields so once it is clicked it will populate our forms with data.
- [ ] allow tabing through fields to populate data or edit data. have fields in the following order: unique code (UPC, ean13, asin and etc), model, category, size, condition, package condition, webprice, ourprice, qty
- [ ] capture images
- [ ] Save item info
- [ ] Security User (Employee or admin users)

## Customer UI (Phase 2)
- [ ] create account
- [ ] allow customer login
- [ ] view products
- [ ] search products
- [ ] filter products by cat,size,gender,price

## Database Structure
![Image of appended log file](/mdimages/tablesa.PNG)
![Image of appended log file](/mdimages/tablesb.PNG)


Merek - Employee UI/handlebars
Tyler - DB/Sequalize/ORM
Thomas - API routes/controllers/json authentication/seed files/testing

## Create In Server
 * Make sure sync force is set to false. ex: db.sequelize.sync({ force: false }). If this is not false it will recreate the tables everytime it runs.
 * remove config from the .gitignore file so that all the configurations will be set on production server.


##Grave Yard
* Failed json authentication would like to have authentication eventually
 	app.post('/login', function (req, res) {

		// find the user
		db.securityuser.findOne({
			where: {
				userName: req.body.userName,
				password: req.body.password
			}

		}).then(function (user) {

			// if (err) throw err;
			console.log(user);

			if (!user) {
				console.log('Authentication failed. User fot found')
				res.json({ success: false, message: 'Authentication failed. User not found.' });
			} else if (user) {

				// check if password matches and that the user is actiive
				if (user.password != req.body.password || user.active === 0) {
					res.json({ success: false, message: 'Authentication failed. Wrong password.' });
				} else {

					// if user is found and password is right
					// create a token with only our given payload
					// we don't want to pass in the entire user since that has the password
					const payload = {
						admin: user.active,
						userName: user.userName
					};
					console.log(payload);
					var token = jwt.sign(payload, app.get('superSecret'), {
						expiresInMinutes: 1440 // expires in 24 hours
					});

					// return the information including token as JSON
					res.json({
						success: true,
						message: 'Enjoy your token!',
						token: token
					});
				}

			}

		});
	});

	app.use((req, res, next) => {
		// check header or url parameters or post parameters for token
		var token = req.body.token || req.query.token || req.headers['x-access-token'];
		if (token) {
			//Decode the token
			jwt.verify(token, "samplesecret", (err, decod) => {
				if (err) {
					res.status(403).json({
						message: "Wrong Token"
					});
				}
				else {
					//If decoded then call next() so that respective route is called.
					req.decoded = decod;
					next();
				}
			});
		}
		else {
			res.status(403).json({
				message: "No Token"
			});
		}
	});





