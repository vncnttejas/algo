const { expect } = require('chai');
const { bubbleSort, selectionSort, insertionSort,
  merge, mergeSort, quickSort } = require('../src/sort');

describe('Sorting Algorithms', () => {
  describe('#Sort O(n^2)', () => {
    it('Test bubble sort', () => {
      expect(bubbleSort([12, 3, 34, 32, 4])).to.eql([3, 4, 12, 32, 34]);
    });
  
    it('Test selection sort', () => {
      expect(selectionSort([12, 3, 34, 32, 4])).to.eql([3, 4, 12, 32, 34]);
    });
  
    it('Test insertion sort', () => {
      expect(insertionSort([12, 3, 34, 32, 4])).to.eql([3, 4, 12, 32, 34]);
    });
  });

  describe('#Sort O(n*log(n)))', () => {
    it('Test merge function', () => {
      expect(merge([4, 12, 43], [2, 5, 6])).to.eql([2, 4, 5, 6, 12, 43]);
    });

    it('Test merge sort', () => {
      expect(mergeSort([12, 3, 34, 32, 4])).to.eql([3, 4, 12, 32, 34]);
    });

    it('Test quick sort', () => {
      expect(quickSort([12, 3, 34, 32, 4])).to.eql([3, 4, 12, 32, 34]);
    });
  });
});
