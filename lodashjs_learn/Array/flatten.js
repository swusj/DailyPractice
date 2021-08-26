import { isArray } from "../myType.js";
import { toArray } from "../utils.js";
// 减少一级array嵌套深度。
function flatten(array) {
	let temp = [];
	if (isArray(array)) {
		temp = array;
	} else if (typeof array === "string") {
		temp = toArray(array);
	} else {
		return false;
	}

	return temp.flat(1);
}

// 原生js的flat是不改变原数组的，要实现的这个也是哦，区别是原生的不能处理字符串
const arr = [1, [2, [3, [4]], 5]];
console.log(arr.flat());
console.log(arr);

console.log(flatten([1, [2, [3, [4]], 5]]));
console.log(flatten({}));
console.log(flatten("1234"));
console.log(flatten([1, [2, [3, [4]], 5], "123"]));
