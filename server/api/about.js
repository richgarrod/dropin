var express = require('express');
var router = express.Router();
var db = require('../services/database.js');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  var users = db.query('SELECT name FROM users WHERE admin=true;', function (err, result) {
  	if (err) throw err;

  	console.log(result.rows);
  	res.json(result.rows);
  });
});

router.get('/details/:userId', function(req, res) {
	var userId = req.params.userId;

	var users = db.query('SELECT name, address, country, email FROM user_details left join users on user_details.user_id = users.id WHERE user_id=' + userId + ";",
		function (err, result) {
		if (err) throw err;

		console.log(result.rows);
		res.json(result.rows[0]);
	});
});

router.get('/dropIns/:userId', function(req, res) {
	var userId = req.params.userId;

	var users = db.query('SELECT date, box FROM drop_ins WHERE user_id=' + userId + ";",
		function (err, result) {
		if (err) throw err;

		console.log(result.rows);
		res.json(result.rows);
	});
});

module.exports = router;