// 创建一个返回给定对象的 path 的值的函数。我这里就直接不返回函数了。。。
import { isArray } from "../myType.js";
function property(obj, path) {
  let temp = [];
  let res = Object.assign({}, obj);
  if (typeof path === "string") {
    temp = path.split(".");
  } else if (isArray(path)) {
    temp = temp.concat(path);
  } else {
    return undefined;
  }

  for (let item of temp) {
    if (res[item] === undefined) {
      return undefined;
    } else {
      res = res[item];
    }
  }
  return res;
}

// var objects = { a: 1, b: 2, c: 3 };
// console.log(property(objects, "a"));

// var objects = [{ a: { b: 2 } }, { a: { b: 1 } }];

// console.log(
//   objects.map((item) => {
//     return property(item, "a.b");
//   })
// );

// console.log(
//   objects.map((item) => {
//     return property(item, ["a", "b"]);
//   })
// );

export { property };
