var express = require('express');
var server = express();

var storage = new Storage();

server.get('/', function (req, res) {
  res.send('Hello World!');
});

server.get('/set', function (req, res) {
  params = req.query;
  res.send('Your set: ' + JSON.stringify(req.query));
});

server.listen(4000, function () {
  console.log('Listening on port 4000');
});
