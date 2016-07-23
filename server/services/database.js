"use strict";
const pg = require("pg");
const config = require("../../resources/config/dev.config");
var Database;
(function (Database_1) {
    class Database {
        constructor() {
            this.config = new config.Config();
            this.client = new pg.Client({
                user: this.config.user,
                database: this.config.database,
                host: this.config.host,
                password: this.config.password,
                port: this.config.port,
                ssl: true
            });
        }
        query(queryString, callback) {
            this.client.connect(function (err) {
                if (err) {
                    throw err;
                }
                this.client.query(queryString, callback);
            });
        }
    }
    Database_1.Database = Database;
})(Database || (Database = {}));
module.exports = Database;
