const simple = (list) => {
  for (let item1 of list) {
    for (let item2 of list) {
      if (item1 + item2 === 0) {
        return [item1, item2];
      }
    }
  }
  return false;
}

const efficient = (list) => {
  let i = 0, j = list.length - 1;
  while (i < j) {
    const iplusj = list[i] + list[j];
    if (iplusj === 0) {
      return [list[i], list[j]];
    }
    if (iplusj < 0) i++;
    if (iplusj > 0) j--;
  }
  return false;
}

module.exports = {
  simple,
  efficient
}