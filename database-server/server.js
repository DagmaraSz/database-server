var express = require('express');
var server = express();

var storage = require("./storage").Storage;

server.get('/', function (req, res) {
  res.send('Hello World!');
});

server.get('/set', function (req, res) {
  storage.params = req.query;
  res.send('You set: ' + JSON.stringify(storage.params));
});

server.listen(4000, function () {
  console.log('Listening on port 4000');
});
