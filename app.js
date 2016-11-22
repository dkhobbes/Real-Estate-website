var express = require('express');
var parser = require('./csvparser.js');

var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/realestatedata', function(req, res) {
  var callback = function(outputIsHere) {
    res.send(outputIsHere);
  }
    parser(callback);
});

app.get('/index.html', function(req,res) {
  vr callback = function(outputIsHere) {
    res.render('data-page', outputIsHere);
  }
  parser(callback);
});

console.log('process.env', process.env);

var port = process.env.PORT || 3096;

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
