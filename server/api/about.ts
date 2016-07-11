/// <reference path="../../_all.d.ts" />
"use strict";

import * as express from "express";
import * as db from '../services/database'

module Route {

  export class About {

		private db: db.Database;

    public about(req: express.Request, res: express.Response, next: express.NextFunction) {
      
			let router: express.Router;
			router = express.Router();
			this.db = new db.Database();

			router.use(function timeLog(req, res, next) {
				console.log('Time: ', Date.now());
				next();
			});

			router.get('/', function(req, res) {
				var users = this.db.query('SELECT name FROM users WHERE admin=true;', function (err, result) {
					if (err) {
						throw err;
					}

					console.log(result.rows);
					res.json(result.rows);
				});
			});

			router.get('/details/:userId', function(req, res) {
				var userId = req.params.userId;

				var users = this.db.query('SELECT name, address, country, email FROM user_details left join users on user_details.user_id = users.id WHERE user_id=' + userId + ";",
					function (err, result) {
					if (err) {
						throw err;
					}

					console.log(result.rows);
					res.json(result.rows[0]);
				});
			});

			router.get('/dropIns/:userId', function(req, res) {
				var userId = req.params.userId;

				var users = this.db.query('SELECT date, boxes.name as name FROM drop_ins LEFT JOIN boxes ON drop_ins.box = boxes.id WHERE user_id=' + userId + ";",
					function (err, result) {
					if (err) {
						throw err;
					}

					console.log(result.rows);
					res.json(result.rows);
				});
			});
    }
  }
}

export = Route;