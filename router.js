var express = require('express');
var app = express();

var home = require("./server/routes/home");

// respond with "hello world" when a GET request is made to the homepage
app.use('/', home);

app.listen(3000, function () {
  console.log('Dropin listening on port 3000!');
});