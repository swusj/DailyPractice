import { getIterator } from "../utils.js";

// 创建一个切片数组，去除array中从起点开始到 predicate 返回假值结束部分。
// predicate 会传入3个参数： (value, index, array)。
function dropWhile(array, predicate) {
  let temp = getIterator(predicate);

  for (let i = 0; i < array.length; i++) {
    if (!temp(array[i], i, array)) {
      //从左到右遇到第一个假
      return array.slice(i, array.length);
    }
  }
  return [];
}

var users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];

console.log(
  dropWhile(users, function (o) {
    return !o.active;
  })
);
console.log(dropWhile(users, { user: "barney", active: false }));
console.log(dropWhile(users, ["active", false]));
console.log(dropWhile(users, "active"));
console.log(dropWhile(users, ["active", false, "user", "22"]));
console.log(dropWhile(users, [1, "active", false, "user", "22"]));

var test = [1, 2, 3, 4, { test: 1 }];

console.log(dropWhile(test, { test: 1 }));
console.log(dropWhile(test, []));
console.log(dropWhile(test, {}));
console.log(dropWhile(test, undefined));
console.log(dropWhile(test));
