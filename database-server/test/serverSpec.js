// Testing frameworks
var request = require('request');
var expect = require('Chai').expect;

// Application files
var server = require('../server.js');

describe('the server', function(){
  it('should be accessible on port 4000', function(done){
    request.get('http://localhost:4000', function (err, res, body){
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should have a /set route', function(done){
    request.get('http://localhost:4000/set', function (err, res, body){
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should have a /get route', function(done){
    request.get('http://localhost:4000/get', function (err, res, body){
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
