const { expect } = require('chai');
var { simple, efficient } = require('../src/square-freq');

describe('Test square frequency', () => {
  
  describe('#simple', () => {
    it('Should check if the algo is working for basic condition', () => {
      expect(simple([1,2], [4, 1])).to.be.true;
    });
  
    it('Should yield false for unequal list should throw false', () => {
      expect(simple([2], [4, 1])).to.be.false;
    });
  
    it('Complex condition', () => {
      expect(simple([1,2,3,4,5], [25, 16, 4, 9, 1])).to.be.true;
    });
  
    it('Bigger second list', () => {
      expect(simple([1,2,3,4,5], [16, 4, 9, 1])).to.be.false;
    });
  });

  describe('#efficent', () => {
    it('Should check if the algo is working for basic condition', () => {
      expect(efficient([1,2], [4, 1])).to.be.true;
    });
  
    it('Should yield false for unequal list should throw false', () => {
      expect(efficient([2], [4, 1])).to.be.false;
    });
  
    it('Complex condition', () => {
      expect(efficient([1, 2, 3, 4, 5], [25, 16, 4, 9, 1])).to.be.true;
    });
  
    it('Bigger second list', () => {
      expect(efficient([1, 2, 3, 4, 5], [16, 4, 9, 1])).to.be.false;
    });
  });

});