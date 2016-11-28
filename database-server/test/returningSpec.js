// Testing frameworks
var request = require('request');
var expect = require('Chai').expect;

// Application files
var server = require('../server.js');
var storage = require("../storage").Storage;

describe('returning somekey with somevalue', function(){

  it('returns the value stored at somekey', function(done){
    storage.params = {'somekey': 'donkey'}
    request.get('http://localhost:4000/get?key=somekey', function (err, res, body){
      expect(res.body).to.include('donkey');
      done();
    });
  });

});
