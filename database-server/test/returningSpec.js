// Testing frameworks
var request = require('request');
var expect = require('Chai').expect;

// Application files
var server = require('../server.js');

describe('returning some key with some value', function(){

//callback hell. again
  beforeEach(function(){
    request.get('http://localhost:4000/set?animal=donkey', function(){
      return request.get('http://localhost:4000/set?animal=whale', function(){
        done();
      });
    });
  });

  it('returns the value stored at the requested key', function(done){
    request.get('http://localhost:4000/get?key=animal', function (err, res, body){
      expect(res.body).to.include('whale');
      done();
    });
  });

  it('returns the last stored value under a given key', function(){
    request.get('http://localhost:4000/get?key=animal', function (err, res, body){
      expect(res.body).not_to.include('monkey');
      done();
    });
  })

});
