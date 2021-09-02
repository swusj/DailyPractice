import { noop } from "../Util/noop.js";
// 检查 value 是否是 类对象。 如果一个值是类对象，那么它不应该是 null，而且 typeof 后的结果是 "object"。
// 和isObject的区别在于isObject(func)为true
function isObjectLike(value) {
	return typeof value === "object" && value != null;
}
// console.log(isObjectLike({}));
// console.log(isObjectLike([1, 2, 3]));
// console.log(isObjectLike(noop));
// console.log(isObjectLike(null));

export { isObjectLike };
