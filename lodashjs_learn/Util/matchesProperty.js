// 创建一个深比较的方法来比较给定对象的 path 的值是否是 srcValue 。 如果是返回 true ，否则返回 false 。
// 注意: 这个方法支持以_.isEqual 的方式比较相同的值。
import { property } from "./property.js";
import { isEqual } from "../Lang/isEqual.js";
function matchesProperty(obj, path, srcValue) {
  const objSrcValue = property(obj, path);
  return isEqual(objSrcValue, srcValue);
}

var objects = { a: 1, b: 2, c: 3 };
console.log(matchesProperty(objects, "a", 4));
console.log(matchesProperty(objects, "a", 1));
