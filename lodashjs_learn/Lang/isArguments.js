import { getType } from "../myType.js";
// 检查 value 是否是一个类 arguments 对象。
function isArguments(value) {
	return getType(value) === "Arguments";
}
console.log(
	isArguments(
		(function () {
			return arguments;
		})()
	)
);
console.log(isArguments([1, 2, 3]));
console.log(isArguments(null));
