import { getIterator } from "../utils.js";

// 这个方式类似_.findIndex， 区别是它是从右到左的迭代集合array中的元素。
function findLastIndex(array, predicate, fromIndex = array.length - 1) {
  let temp = getIterator(predicate);

  fromIndex = Math.floor(fromIndex);
  fromIndex = fromIndex < 0 ? 0 : fromIndex;
  for (let i = fromIndex; i >= 0; i--) {
    if (temp(array[i], i, array)) {
      //从右到左遇到第一个假
      return i;
    }
  }
  return -1;
}

var users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];

console.log(
  findLastIndex(users, function (o) {
    return o.user == "pebbles";
  })
);
console.log(findLastIndex(users, { user: "barney", active: true }));
console.log(findLastIndex(users, ["active", false]));
console.log(findLastIndex(users, "active"));

console.log(findLastIndex(users, "active", 6));
console.log(findLastIndex(users, "active", 2.2));
console.log(findLastIndex(users, "active", -1));
