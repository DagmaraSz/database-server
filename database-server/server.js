var express = require('express');
var server = express();

var Storage = require("./storage").Storage;
var store = new Storage();

server.get('/', function (req, res) {
  res.send('Hello World!');
});

server.get('/set', function (req, res) {
  store.params.push(req.query);
  res.send('You set: ' + JSON.stringify(store.params[store.params.length-1]));
});

server.get('/get', function (req, res){
  if(!req.query['key']){
    res.send('Key not found.');
  } else {
    var pair = store.params.find(function(element){
      if (Object.keys(element)[0] === req.query['key']){
        var allMatchingPairs = Object.keys(element)
        return allMatchingPairs[allMatchingPairs.length - 1];
      }
    });
    res.send('The value of ' + req.query['key'] + ' is: ' + pair[req.query['key']]);
  }
});

server.listen(4000, function () {
  console.log('Listening on port 4000');
});
