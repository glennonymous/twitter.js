var express = require('express');
var morgan = require('morgan');
var swig = require('swig');
swig.setDefaults({ cache: false });

var app = express();
app.engine('html', swig.renderFile);
app.set('view engine','html');
app.set('views','./views');

app.use(morgan('dev'));

// app.get('/', function (req, res) {
//   res.send('whoop!');
// });

// app.get('/tweets', function (req, res) {
// 	res.send('Tweet!');
// });

app.get('/tweets', function (req, res) {
	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	res.render( 'index', {title: 'Hall of Fame', people: people} );
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});