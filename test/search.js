const { expect } = require('chai');
const { linear, binary } = require('../src/search');

describe('#Linear Search', () => {
  it('Test linear search', () => {
    expect(linear([12, 3, 34, 32, 4], 4)).to.equal(4);
    expect(linear(['India', 'China', 'Pakistan', 'USA'], 'China')).to.equal(1);
    expect(linear([1, 4, 2, 5, 6], 99)).to.equal(-1);
  });

  it('Test binary search', () => {
    expect(binary([1, 2, 3, 4, 6, 8, 9, 11, 14, 15], 11)).to.equal(7);
    expect(binary([6, 8, 9, 11, 14, 15], 11)).to.equal(3);
    expect(binary([6, 8, 9, 15, 23, 34, 45, 65, 76], 78)).to.equal(-1);
  });
});
