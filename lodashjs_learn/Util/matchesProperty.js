// 创建一个深比较的方法来比较给定对象的 path 的值是否是 srcValue 。 如果是返回 true ，否则返回 false 。
// 注意: 这个方法支持以_.isEqual 的方式比较相同的值。
import { property } from "./property.js";
import { isEqual } from "../Lang/isEqual.js";
function matchesProperty(path, srcValue) {
	return (obj) => {
		// 如果是数组且只有一个值，数组的第一个值就是path
		let temp = path;
		if (Array.isArray(path)) {
			if (Array.length !== 1) {
				return false;
			}
			temp = path[0];
		} else if (typeof path === "string") {
			temp = path;
		}
		const objSrcValue = property(temp)(obj);
		return isEqual(objSrcValue, srcValue);
	};
}

var objects = { a: 1, b: 2, c: 3 };
console.log(matchesProperty("a", 4)(objects));
console.log(matchesProperty("a", 1)(objects));
console.log(matchesProperty(["a"], 1)(objects));

export { matchesProperty };
