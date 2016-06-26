var express = require('express');
var app = express();

var home = require("./server/api/home");

app.use(express.static(__dirname + '/client'));                 


app.get('*', function(req, res) {
    res.sendfile('./client/index.html');
});

app.listen(3000, function () {
  console.log('Dropin listening on port 3000!');
});