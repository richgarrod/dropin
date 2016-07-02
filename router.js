var express = require('express');
var app = express();

var home = require("./server/api/home");
var about = require("./server/api/about");
app.use(express.static(__dirname + '/client'));                 


app.use('/about', about)

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
})

app.listen(3000, function () {
  console.log('Dropin listening on port 3000!');
});