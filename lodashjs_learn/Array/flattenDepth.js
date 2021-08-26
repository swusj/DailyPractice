import { isArray } from "../myType.js";
import { toArray } from "../utils.js";

// 将array递归为一维数组。
function flattenDeep(array, depth = 1) {
	let temp = [];
	if (isArray(array)) {
		temp = array;
	} else if (typeof array === "string") {
		temp = toArray(array);
	} else {
		return false;
	}

	return temp.flat(depth);
}

// 注意数组内的字符串不会再转化成数组了
console.log(flattenDeep([1, [2, [3, [4]], 5]], 1));
console.log(flattenDeep({}));
console.log(flattenDeep("1234"));
console.log(flattenDeep([1, [2, [3, [4]], 5], "123"], 2));
