'use-strict'

const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');


chai.use(spies);

describe('simple test', function() {
  it('adds', function() {
    expect(2 + 2).to.be.equal(4);
  });
});

describe('setTimeout', function() {
  it('sets a timeout', function(done) {
    this.timeout(1000);
    setTimeout(done, 700);
  });
});

describe('Spy on forEach', function() {
  it('spies...', function () {
    const arr = [1, 2, 3, 4];
    var plusOne = function (num) {
      return num + 1;
    };
    plusOne = chai.spy(plusOne);
    arr.forEach(plusOne);
    expect(plusOne).to.have.been.exactly(4);
  });
});
