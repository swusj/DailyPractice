import { noop } from "../Util/noop.js";
// 检查 value 是否为 Object 的language type。 (例如： arrays, functions, objects, regexes,new Number(0), 以及 new String(''))
function isObject(value) {
	return (typeof value === "object" || typeof value === "function") && value != null;
}
console.log(isObject({}));
console.log(isObject([1, 2, 3]));
console.log(isObject(noop));
console.log(isObject(null));
