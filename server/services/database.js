var pg = require('pg');

function getClient() {
  var client = new pg.Client({
      database: 'dropin',
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