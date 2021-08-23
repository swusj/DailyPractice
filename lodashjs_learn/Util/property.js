// 创建一个返回给定对象的 path 的值的函数。
import { isArray } from "../myType.js";
function property(path) {
  return function (obj) {
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
  };
}

var objects = { a: 1, b: 2, c: 3 };

var objects = [{ a: { b: 2 } }, { a: { b: 1 } }];

console.log(
  objects.map((item) => {
    return property("a.b")(item);
  })
);

console.log(
  objects.map((item) => {
    return property(["a", "b"])(item);
  })
);

export { property };
