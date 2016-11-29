// Testing frameworks
var request = require('request');
var expect = require('Chai').expect;

// Application files
var server = require('../server.js');

describe('storing somekey with somevalue', function(){

  it('responds with the params you pass in the query string', function(done){
    request.get('http://localhost:4000/set?somekey=somevalue', function (err, res, body){
      expect(res.body).to.include('somekey');
      expect(res.body).to.include('somevalue');
      done();
    });
  });
});
