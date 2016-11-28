var request = require('request');
var expect = require('Chai').expect;
var server = require('../server.js');

describe('storing somekey with somevalue', function(){

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
  });

  it('prints back the params you pass in the query string', function(done){
    request.get('http://localhost:4000/set?somekey=somevalue', function (err, res, body){
      expect(res.body).to.include('somekey');
      expect(res.body).to.include('somevalue');
      done();
    });
  });

  it('saves the params you pass in the query string', function(done){
    request.get('http://localhost:4000/set?somekey=somevalue', function (err, res, body){
      expect(server).to.include('somekey');
      expect(res.body).to.include('somevalue');
      done();
    });
  });
});
