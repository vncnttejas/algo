const { expect } = require('chai');
const isAnagram = require('../src/anagram');

describe('#Anagrams', () => {
  it('Should check if same strings are anagrams', () => {
    expect(isAnagram('abc', 'abc')).to.be.true;
  });

  it('Should check if jumbled strings with same chars are anagrams', () => {
    expect(isAnagram('abc', 'bac')).to.be.true;
  });
})
