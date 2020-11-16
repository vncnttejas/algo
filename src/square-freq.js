const simple = (list1, list2) => {
  if (list1.length !== list2.length) {
    return false;
  }
  for (let item of list1) {
    const foundAt = list2.indexOf(item**2);
    if (foundAt === -1) return false;
    list2.splice(foundAt, 1);
  }
  return true;
};

const efficient = (list1, list2) => {
  if (list1.length !== list2.length) {
    return false;
  }

  let objList1 = {}, objList2 = {};
  
  for (let item of list1) {
    objList1[item] = (objList1[item] || 0) + 1;
  }

  for (let item of list2) {
    objList2[item] = (objList2[item] || 0) + 1;
  }

  for (let item of list1) {
    if (!(item**2 in objList2)) {
      return false;
    }
    if (objList1[item] !== objList2[item**2]) {
      return false;
    }
  }
  return true;
}

module.exports = {
  simple,
  efficient
}