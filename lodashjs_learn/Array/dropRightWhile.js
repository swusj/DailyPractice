import { isEqual } from ".. /utils.js";

// 创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)。
// 怎么感觉和描述不一样。。。测试出来是去掉最后一个假的右边的全真数组（去掉结尾到左的连续真，直到遇到第一个假）
// 字符串，和每一项进行比较，如果是对象，就看对象这个值是真是假
// 数字，返回原来的
// 对象，predicate为比较迭代的每一项和对象是否值相等;
// 数组，数组转化为对象，如果有任一一个属性值相等，就为真
function dropRightWhile(array, predicate) {
  let temp;
  if (Object.is(predicate, NaN) || predicate === undefined) {
    return [];
  }
  switch (typeof predicate) {
    case "function":
      break;
    case "string":
      temp = predicate;
      predicate = function (item) {
        if (typeof item !== "object") {
          return false;
        } else {
          return item[temp];
        }
      };
      break;
    case "number":
      return array;
    case "object":
      if (Array.isArray(predicate)) {
        // 如果是数组，将数组转化为对象
        //将数组转化为对象
        if (predicate.length === 0) {
          return array;
        }
        temp = {};
        for (let i = 0; i < predicate.length - 1; i++) {
          if (typeof predicate[i] === "string") {
            temp[predicate[i]] = predicate[i + 1];
            i++;
          } else {
            //如果不能转化成对象
            return array;
          }
        }
        predicate = function (item) {
          // 如果有任一一个属性值相等，就为真
          const keys = Object.keys(temp);
          for (let i = 0; i < keys.length; i++) {
            if (temp[keys[i]] === item[keys[i]]) {
              return true;
            }
          }
          return false;
        };
      } else {
        //普通对象，就比较是否值相等了
        if (Object.keys(predicate).length === 0) {
          return [];
        }
        temp = predicate;
        predicate = function (item) {
          return isEqual(item, temp);
        };
      }
      break;
    default:
      return array;
  }

  for (let i = array.length - 1; i >= 0; i--) {
    if (!predicate(array[i], i, array)) {
      //从右到左遇到第一个假
      return array.slice(0, i + 1);
    }
  }
}

var users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];

console.log(
  dropRightWhile(users, function (o) {
    return !o.active;
  })
);
console.log(dropRightWhile(users, { user: "pebbles", active: false }));
console.log(dropRightWhile(users, ["active", false]));
console.log(dropRightWhile(users, "active"));
console.log(dropRightWhile(users, ["active", false, "user", "22"]));
console.log(dropRightWhile(users, [1, "active", false, "user", "22"]));

var test = [1, 2, 3, 4, { test: 1 }];

console.log(dropRightWhile(test, { test: 1 }));
console.log(dropRightWhile(test, []));
console.log(dropRightWhile(test, {}));
console.log(dropRightWhile(test, undefined));
console.log(dropRightWhile(test));
