const { expect } = require('chai');
const { simple, efficient } = require('../src/zero-sum');

describe('#Zero Sum', () => {
  describe('#simple', () => {
    it('Should provide a list of zero sum pairs', () => {
      expect(simple([-1, 1])).to.eql([-1, 1]);
    });
  });
  describe('#efficient', () => {
    it('Should provide a list of zero sum pairs', () => {
      expect(efficient([-1, 1])).to.eql([-1, 1]);
      expect(efficient([-1, 0])).to.be.false;
      expect(efficient([-1, 0, 1, 2])).to.eql([-1, 1]);
      expect(efficient([0])).to.be.false;
    });
  });
})
