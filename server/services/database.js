var pg = require('pg');
var config = require('../../resources/config/dev.config');

function getClient() {
  var client = new pg.Client({
      host: config.host,
      user: config.user,
      password: config.password,
      port: config.port,
      database: config.database,
    });
  return client;
}

module.exports = {

  query: function (queryString, callback) {
    var client = getClient();

    client.connect(function (err) {
      if (err) throw err;

      // execute a query on our database
      client.query(queryString, callback);
    });
  }  
}