var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.send('hello, world!');
});

app.get('/tweets', function (req, res) {
	res.send('Tweet!');
});
//sdfsdkfj
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});