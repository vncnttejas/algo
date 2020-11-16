const bubbleSort = (list) => {
  for (let x=list.length; x>=0; x--) {
    for (let y=0; y<x-1; y++) {
      if (list[y] > list[y+1]) [list[y], list[y+1]] = [list[y+1], list[y]];
    }
  }
  return list;
}

const selectionSort = (list) => {
  for (let x=0; x<list.length; x++) {
    let lowest = x;
    for (let y=x+1; y<list.length; y++) {
      if (list[y] < list[lowest]) {
        lowest = y;
      }
    }
    [list[lowest], list[x]] = [list[x], list[lowest]];
  }
  return list;
}


const insertionSort = (list) => {
  for (var x=1; x<list.length; x++) {
    let currentValue = list[x];
    for (var y=x-1; y>=0 && list[y]>currentValue; y--) {
      list[y+1] = list[y];
    }
    list[y+1] = currentValue;
  }
  return list;
}

const mergeSort = (list) => {
  if (list.length <= 1) return list;
  let midpoint = Math.floor(list.length/2);
  let left = mergeSort(list.slice(0, midpoint));
  let right = mergeSort(list.slice(midpoint));
  return merge(left, right);
}

const merge = (list1, list2) => {
  let x = 0, y = 0;
  let result = [];
  while (x<list1.length && y<list2.length) {
    list1[x] < list2[y] ? result.push(list1[x++]) : result.push(list2[y++]);
  }
  if (list1.length > x) {
    result = [...result, ...list1.slice(x)]
  }
  if (list2.length > y) {
    result = [...result, ...list2.slice(y)]
  }
  return result;
}

const quickSort = (list) => {
  return list;
}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort,
  merge,
  mergeSort,
  quickSort
};