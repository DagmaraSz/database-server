// Testing frameworks
var request = require('request');
var expect = require('Chai').expect;

// Application files
var server = require('../server.js');


describe('returning some stored key with some value', function(){

  before(function(done) {
    request.get('http://localhost:4000/set?animal=whale', function (res) {
      done();
    });
  });

  it('returns the value stored at the requested key', function(done){
    request.get('http://localhost:4000/get?key=animal', function (err, res, body){
      expect(res.body).to.include('whale');
      done();
    });
  });

  it('returns the last value stored at the requested key', function(done){
    request.get('http://localhost:4000/set?animal=monkey', function (res) {
      request.get('http://localhost:4000/get?key=animal', function (err, res, body){
        expect(res.body).to.include('monkey');
        expect(res.body).to.not.include('whale');
        done();
      });
    });
  });

  it('tells you if a key is undefined', function(done){
    request.get('http://localhost:4000/get?key=tree', function (err, res, body){
      expect(res.body).to.include('undefined');
      done();
    });
  });
});
