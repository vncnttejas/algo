const simple = (list) => {
  let uniqList = [];
  for (let item of list) {
    if (!uniqList.includes(item)) {
      uniqList.push(item);
    }
  }
  return uniqList;
}

// Only works with sorted lists
const efficient = (list) => {
  let uniqSubset = 0;
  for (let scout=1; scout<list.length; scout++) {
    if (list[scout] !== list[uniqSubset]) {
      uniqSubset += 1;
      list[uniqSubset] = list[scout];
    }
  }
  return list.slice(0, uniqSubset + 1);
}

module.exports = {
  simple,
  efficient
}