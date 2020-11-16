const linear = (haystack, needle) => {
  for (let i=0;i<=haystack.length;i++) {
    if (haystack[i] === needle) {
      return i;
    }
  }
  return -1;
}

const binary = (haystack, needle) => {
  let start = 0, end = haystack.length - 1, midpoint = Math.floor(end/2);
  while (haystack[midpoint] !== needle && start < end) {
    haystack[midpoint] > needle ? end = midpoint-1 : start = midpoint+1;
    midpoint = Math.floor((end+start)/2);
  }
  if (haystack[midpoint] === needle) return midpoint;
  return -1;
}

module.exports = {
  linear,
  binary
}