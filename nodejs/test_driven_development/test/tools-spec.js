var expect = require('chai').expect;
var nock = require('nock');
var tools = require('../lib/tools');

describe('Tools', function() {

  describe('printName()', function() {
    it('should print the last name first', function() {
      var results = tools.printName({first: 'Jeandre', last: 'Rohlandt'});
      expect(results).to.equal('Rohlandt, Jeandre');
    });
  });

  describe('loadWiki()', function() {

    before(function() {
      nock('https://en.wikipedia.org')
        .get('/wiki/Abraham_Lincoln')
        .reply(200, 'Mock Abraham Lincoln html');
    });

    it('Load Abe Lincoln wiki page', function(done) {
      tools.loadWiki({first: 'Abraham', last: 'Lincoln'}, function(html) {
        expect(html).to.be.ok;
        done();
      });
    });

  });

});
