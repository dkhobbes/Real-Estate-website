var express = require('express');
var parser = require('./csvparser.js');

var app = express();

app.use(express.static('public'));

app.get('/realestatedata', function(req, res) {

  var callback = function(outputIsHere) {

    res.send(outputIsHere);
  }
    parser(callback);
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
