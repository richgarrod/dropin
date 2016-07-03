var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var home = require("./server/api/home");
var about = require("./server/api/about");
var boxes = require("./server/api/boxes");
app.use(express.static(__dirname + '/client'));                 


app.use('/home', home);
app.use('/about', about)
app.use('/boxes', boxes);

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
})

app.listen(port, function () {
  console.log('Dropin listening on port 3000!');
});