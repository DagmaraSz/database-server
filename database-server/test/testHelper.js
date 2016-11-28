(function(exports){
  function setUp(){
    // Testing frameworks
    var request = require('request');
    var expect = require('Chai').expect;

    // Application files
    var server = require('../server.js');
    var storage = require("../storage").Storage;
  };

  exports.setUp = setUp;
})(this);
