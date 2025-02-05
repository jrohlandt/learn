var expect = require('chai').expect;
var rewire = require('rewire');
var sinon = require('sinon');

// var order = require('../lib/order');
var order = rewire('../lib/order');

describe('Ordering Items', function() {

  beforeEach(function() {
    this.testData = [
      {sku: 'AAA', qty: 10},
      {sku: 'BBB', qty: 0},
      {sku: 'CCC', qty: 3}
    ];

    this.console = {
      log: sinon.spy()
    };

    this.warehouse = {
      packageAndShip: sinon.stub().yields(1984983209)
    };

    order.__set__('inventoryData', this.testData);
    order.__set__('console', this.console);
    order.__set__('warehouse', this.warehouse);
  });

  it('should not find non-existing product', function() {
    order.orderItem('ZZZ', 19);
    expect(this.console.log.calledWith('Item - ZZZ not found')).to.equal(true);
  });

  it('should order an item when there are enough in stock', function(done) {
    order.orderItem('CCC', 3, function() {
      expect(this.console.log.callCount).to.equal(2);
      done();
    }.bind(this));
  });

  describe('Warehouse Interaction', function() {

    beforeEach(function() {
      this.callback = sinon.spy();
      order.orderItem('CCC', 2, this.callback);
    });

    it('receives a tracking number', function() {
      expect(this.callback.calledWith(1984983209)).to.equal(true);
    });

    it('calls packageAndShip with the correct sku and quantity', function() {
      expect(this.warehouse.packageAndShip.calledWith('CCC', 2)).to.equal(true);
    });
  });
});
