var express = require('express');
var server = express();

var Storage = require("./storage").Storage;
var store = new Storage();

server.get('/', function (req, res) {
  res.send('Hello World!');
});

server.get('/set', function (req, res) {
  var key = Object.keys(req.query).pop()
  store[key] = req.query[key];
  res.send('You set: ' + key + ' to ' + store[key]);
});

server.get('/get', function (req, res){
  var key = req.query['key'];
  if(key){
    res.send('The value of ' + key + ' is: ' + store[key]);
  } else {
    res.send('Key not specified.');
  }
});

server.listen(4000, function () {
  console.log('Listening on port 4000');
});
