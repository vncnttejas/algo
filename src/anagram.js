// Compare 2 strings to find if they are anagrams
const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const objStr1 = {}, objStr2 = {};

  for (let char of str1) {
    objStr1[char] = (objStr1[char] || 0) + 1;
  }
  for (let char of str2) {
    objStr2[char] = (objStr2[char] || 0) + 1;
  }

  for (let char of str1) {
    if (!(char in objStr2)) {
      return false;
    }
    if (str1[char] !== str2[char]) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;