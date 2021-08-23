import { getIterator } from "../utils.js";

// 该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。
function findIndex(array, predicate, fromIndex = 0) {
  let temp = getIterator(predicate);

  fromIndex = Math.floor(fromIndex);
  for (let i = fromIndex; i < array.length; i++) {
    if (temp(array[i], i, array)) {
      //从右到左遇到第一个假
      return i;
    }
  }
  return -1;
}

var users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];

console.log(
  findIndex(users, function (o) {
    return o.user == "barney";
  })
);
console.log(findIndex(users, { user: "fred", active: false }));
console.log(findIndex(users, ["active", false]));
console.log(findIndex(users, "active"));

console.log(findIndex(users, "active", 2));
console.log(findIndex(users, "active", 2.2));
console.log(findIndex(users, "active", -1));
