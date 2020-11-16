const { expect } = require('chai');
var { simple, efficient } = require('../src/unique-in-array');

describe('Test square frequency', () => {
  
  describe('#simple', () => {
    it('Should check if the algo is working for basic condition', () => {
      expect(simple([1, 2, 2, 3])).to.eql([1, 2, 3]);
    });

    it('Should check if the algo is working for sorted array condition', () => {
      expect(efficient([1, 2, 2, 3])).to.eql([1, 2, 3]);
      expect(efficient([1, 2, 2, 3, 3, 4, 5, 5, 5])).to.eql([1, 2, 3, 4, 5]);
    });
  });
});